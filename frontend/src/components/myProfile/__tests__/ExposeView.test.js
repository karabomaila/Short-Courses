import React from 'react';
import { render } from '@testing-library/react';
import ExposeView from '../ExposeView';

describe('Exposeview Bio Test', ()=>{

    const bio = '';
    const setBio = bio;
    const userID = 'a0074560@wits.ac.za';
    const courses = [];
    const comments = [];
    
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
        expect(txt1.innerHTML).toEqual('Expose View');
    })

    test('Text2 ', ()=>{
        const {getByTestId} = render(<ExposeView userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);
        const txt1 = getByTestId('exp-text2');
        expect(txt1.innerHTML).toEqual('Completed Courses');
    })

    test('Text3 ', ()=>{
        const {getByTestId} = render(<ExposeView userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);
        const txt1 = getByTestId('exp-text3');
        expect(txt1.innerHTML).toEqual('Pushed Comments');
    })
})