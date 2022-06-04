import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Skills from '../Skills';
import Work from '../Work';
import Education from '../Education';

describe("Skills Test", ()=>{

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Skills visible = {visible} 
            setVisible = {useHook}
            userID = {userID} data = {data}/>);
        const icon = getByTestId( "test-skill-icon");
        fireEvent.click(icon);
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

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Work visible = {visible} 
            setVisible = {useHook}
            userID = {userID} data = {data}/>);
        const icon = getByTestId( "test-work-icon");
        fireEvent.click(icon);
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

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test("Test Icon", ()=>{
        const visible = true;
        const userID = "2381410";
        const data = [{}];
        const {getByTestId} = render(<Education visible = {visible} 
            setVisible = {useHook}
            userID = {userID} data = {data}/>);
        const icon = getByTestId("test-edu-icon");
        fireEvent.click(icon);
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