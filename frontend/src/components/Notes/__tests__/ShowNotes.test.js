import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import ShowNotes from '../ShowNotes';

describe('Show Notes Test', ()=>{

    const useHook = (bool) =>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const notes = [{courseName: 'Name', notes: 'notes...'}];
        const {getByTestId} = render(<ShowNotes notes = {notes} flag = {false} setView = {useHook} setInfo = {useHook}/>);
        const d = getByTestId('snts-div');
        expect(d).toBeTruthy();
    });

    test('Render Div', ()=>{
        const notes = [{courseName: 'Name', notes: 'notes...'}];
        const {getByTestId} = render(<ShowNotes notes = {notes} flag = {true} setView = {useHook} setInfo = {useHook}/>);
        const d = getByTestId('snts-div2');
        expect(d).toBeTruthy();
    });
    

    
});






