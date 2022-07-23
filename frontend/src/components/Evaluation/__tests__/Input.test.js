import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import Input from '../Input';

describe('Input Test', ()=>{

    test('Radio Test', ()=>{
        const {getByTestId} = render(<Input type = 'radio'/>);
        const d = getByTestId('rad-in-txt');
        expect(d).toBeTruthy();
    });

    test('Radio Test - Statement', ()=>{
        const {getByTestId} = render(<Input type = 'radio'/>);
        const txt = getByTestId('rad-in-txt');
        fireEvent.change(txt, {target: {value: ''}});
        expect(txt.value).toBe('');
    });

    test('Radio Test - Option1', ()=>{
        const {getByTestId} = render(<Input type = 'radio'/>);
        const txt = getByTestId('rad-in-op1');
        fireEvent.change(txt, {target: {value: ''}});
        expect(txt.value).toBe('');
    });

    test('Radio Test - Option2', ()=>{
        const {getByTestId} = render(<Input type = 'radio'/>);
        const txt = getByTestId('rad-in-op2');
        fireEvent.change(txt, {target: {value: ''}});
        expect(txt.value).toBe('');
    });

    test('Radio Test - Option3', ()=>{
        const {getByTestId} = render(<Input type = 'radio'/>);
        const txt = getByTestId('rad-in-op3');
        fireEvent.change(txt, {target: {value: ''}});
        expect(txt.value).toBe('');
    });



    test('Box Test', ()=>{
        const {getByTestId} = render(<Input type = 'box'/>);
        const d = getByTestId('othr-in-div');
        expect(d).toBeTruthy();
    });

    test('Slider Test', ()=>{
        const {getByTestId} = render(<Input type = 'slider'/>);
        const d = getByTestId('othr-in-div');
        expect(d).toBeTruthy();
    });
});






