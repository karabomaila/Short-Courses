import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import CourseNotesCard from '../CourseNotesCard';

describe('Course Notes Card Test', ()=>{

    const useHook = (bool) =>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const data = {courseName: 'Name', notes: 'notes...'}
        const {getByTestId} = render(<CourseNotesCard data = {data} setView = {useHook} setInfo = {useHook}/>);
        const d = getByTestId('cnts-div');
        expect(d).toBeTruthy();
    });

    test('onClick', ()=>{
        const data = {courseName: 'Name', notes: 'notes...'}
        const {getByTestId} = render(<CourseNotesCard data = {data} setView = {useHook} setInfo = {useHook}/>);
        const d = getByTestId('cnts-div');
        fireEvent.click(d);
    });

    
});

