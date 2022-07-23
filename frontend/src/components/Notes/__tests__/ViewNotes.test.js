import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import ViewNotes from '../ViewNotes';


describe('Show Notes Test', ()=>{

    const useHook = (bool) =>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const info = {courseName: 'Name', notes: 'notes...'};
        const {getByTestId} = render(<ViewNotes info = {info} setView = {useHook} />);
        const d = getByTestId('vnts-div');
        expect(d).toBeTruthy();
    });


    test('onBack', ()=>{
        const info = {courseName: 'Name', notes: 'notes...'};
        const {getByTestId} = render(<ViewNotes info = {info} setView = {useHook} />);
        const btn = getByTestId('vnt-back');
        fireEvent.click(btn);
    });

});



