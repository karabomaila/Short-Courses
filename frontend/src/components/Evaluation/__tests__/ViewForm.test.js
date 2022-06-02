import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import ViewForm from '../ViewForm';

describe('View Form Test', ()=>{

    test('Rander Test', ()=>{
        const data = [{type: 'radio', content: 'the radio', array:['op1', 'op2', 'op3']},
        {type: 'box', content: 'the box'}, {type: 'slider', content: 'the slider'}];
        const {getByTestId} = render(<ViewForm courseName = 'The Course Name' 
                                    data = {data} checked = {false}/>);
        const d = getByTestId('view-form');
        expect(d).toBeTruthy();
    });

    test('Rander Test2', ()=>{
        const data = [{type: 'radio', content: 'the radio', array:['op1', 'op2', 'op3']},
        {type: 'box', content: 'the box'}, {type: 'slider', content: 'the slider'}];
        const {getByTestId} = render(<ViewForm courseName = 'The Course Name' 
                                    data = {data} checked = {true}/>);
        const d = getByTestId('view-form');
        expect(d).toBeTruthy();
    });
});



