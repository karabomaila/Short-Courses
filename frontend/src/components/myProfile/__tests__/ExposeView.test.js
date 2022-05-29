import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ExposeView from '../ExposeView';

describe('ExposeView Tets', ()=>{
    const bio = '';
    const setBio = bio;
    const userID = 'a0074560@wits.ac.za';
    const courses = [];
    const comments = [];

    const useHook=(bool)=>{
        let state = false;
        return state = bool;
    }
    
    test('Render Bio', ()=>{
        const {getByTestId} = render(<ExposeView userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);
        const bioField = getByTestId('exp-test-bio');
        expect(bioField).toBeTruthy();
    })

    test('Text1 ', ()=>{
        const {getByTestId} = render(<ExposeView userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);
        const txt1 = getByTestId('exp-text1');
        expect(txt1.innerHTML).toEqual('EXPOSE-VIEW');
    })

    test('onChange bio', ()=>{
        const {getByTestId} = render(<ExposeView userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {useHook}/>);
        const bioField = getByTestId('exp-test-bio');
        const value = 'NewBio';
        fireEvent.change(bioField, {target:{value:value}});
        console.log(bioField.value);
        expect(bioField.value).toBe('');
    })

})