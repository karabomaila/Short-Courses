import React from 'react';
import { render } from '@testing-library/react';
import Display from '../Display';

describe('Display Test', ()=>{

    const bio = '';
    const setBio = bio;
    const userID = 'a0074560@wits.ac.za';
    const courses = [];
    const comments = [];


    test('Display Expo Test', ()=>{
        const {getByTestId} = render(<Display userID = {userID} 
            courses = {courses} comments = {comments} 
            bio = {bio} setBio = {setBio} view = {'ExposeView'}/>);

        const d = getByTestId('display-expo');
        expect(d).toBeTruthy();
    });

    test('Display Notes Test', ()=>{
        const {getByTestId} = render(<Display userID = {userID} 
            courses = {courses} comments = {comments} 
            bio = {bio} setBio = {setBio} view = {'Notes'}/>);

        const d = getByTestId('display-notes');
        expect(d).toBeTruthy();
    });

})