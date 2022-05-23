import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Skills from '../Skills';
import Work from '../Work';
import Education from '../Education';

describe("Skills Test", ()=>{
    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Skills visible = {visible} 
            userID = {userID} data = {data}/>);
        const icon = getByTestId( "test-skill-icon");
        expect(icon).toBeTruthy();
    });

    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Skills visible = {visible} 
            userID = {userID} data = {data}/>);
        const d = getByTestId( "test-skill-div");
        expect(d).toBeTruthy();
    });
});

describe("Work Test", ()=>{
    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Work visible = {visible} 
            userID = {userID} data = {data}/>);
        const icon = getByTestId( "test-work-icon");
        expect(icon).toBeTruthy();
    });

    test("Test Main Div", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Work visible = {visible} 
            userID = {userID} data = {data}/>);
        const icon = getByTestId( "test-work-div");
        expect(icon).toBeTruthy();
    });
});

describe("Education Test", ()=>{
    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Education visible = {visible} 
            userID = {userID} data = {data}/>);
        const icon = getByTestId("test-edu-icon");
        expect(icon).toBeTruthy();
    });

    test("Test Main Div", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Education visible = {visible} 
            userID = {userID} data = {data}/>);
        const icon = getByTestId("test-edu-div");
        expect(icon).toBeTruthy();
    });
});