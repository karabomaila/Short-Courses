import React from 'react';
import { render } from '@testing-library/react';
import Display from '../Display';

describe('Display Test', ()=>{

    const bio = '';
    const setBio = bio;
    const userID = 'a0074560@wits.ac.za';
    const courses = [];
    const comments = [];


    test('Div Test', ()=>{
        const {getByTestId} = render(<Display userID = {userID} 
            courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);

        const d = getByTestId('display-div');
        expect(d).toBeTruthy();
    })
})