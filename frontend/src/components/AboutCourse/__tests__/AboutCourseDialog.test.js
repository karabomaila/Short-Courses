import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AboutCourseDialog from '../AboutCourseDialog';

describe('About Course Dialog Test', ()=>{

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    const open = true;
    const courseName = 'CourseName';
    const data = {duration: 11, outcomes: ['a', 'b'], description: 'Testing the dialog'};

    test('Render ', ()=>{
        const {getByTestId} = render(<AboutCourseDialog open = {open} close = {useHook}
        courseName = {courseName} data = {data}/>);
        const d = getByTestId('abt-div');
        expect(d).toBeTruthy();
    });

    test('onClose', ()=>{
        const {getByTestId} = render(<AboutCourseDialog open = {open} close = {useHook}
        courseName = {courseName} data = {data}/>);
        const btn = getByTestId('abt-btn');
        fireEvent.click(btn);
    });
});