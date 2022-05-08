import React from 'react';
import {useState} from 'react';
import { render } from '@testing-library/react';
import ExposeView from '../ExposeView';

describe('Exposeview Bio Test', ()=>{

    const bio = '';
    const setBio = bio;
    const userID = 'a0074560@wits.ac.za';
    const courses = [];
    const comments = [];
    
    const {getByTestId} = render(<ExposeView userID = {userID} 
        courses = {courses} comments = {comments} bio = {bio} setBio = {setBio}/>);
    const bioField = getByTestId('exp-test-bio');

    test('Render Bio', ()=>{
        expect(bioField).toBeTruthy();
    })
})