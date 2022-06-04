import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ListOutcomes from '../ListOutcomes';
import DisplayOutcomes from '../DisplayOutcomes';

describe('List Outcomes Test', ()=>{

    test('Render ', ()=>{
        const array = ['list', 'list2'];
        const {getByTestId} = render(<ListOutcomes array = {array}/>);
        const d = getByTestId('ls-out');
        expect(d).toBeTruthy();
    });
});


describe('Display Outcomes Test', ()=>{

    test('Render ', ()=>{
        const array = ['list', 'list2'];
        const {getByTestId} = render(<DisplayOutcomes outcome = {array}/>);
        const d = getByTestId('ds-out');
        expect(d).toBeTruthy();
    });
});


