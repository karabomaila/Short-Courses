import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Action from '../Action';


describe('Action Test', ()=>{

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('onClick Exposeview', ()=>{
        const {getByTestId} = render(<Action title = 'ExposeView' click = 'ExposeView' setView = {useHook}/>);
        const btn = getByTestId('ExposeView');
        fireEvent.click(btn);
    });

    test('onClick Notes', ()=>{
        const {getByTestId} = render(<Action title = 'Notes' click = 'Notes' setView = {useHook}/>);
        const btn = getByTestId('Notes');
        fireEvent.click(btn);
    });

    test('onClick Nothing', ()=>{
        const {getByTestId} = render(<Action title = 'Nothing' click = 'Nothing' setView = {useHook}/>);
        const btn = getByTestId('Nothing');
        fireEvent.click(btn);
    });
});



