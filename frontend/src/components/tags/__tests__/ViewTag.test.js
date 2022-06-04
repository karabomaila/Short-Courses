import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ViewTag from '../ViewTag';

describe('View Tag Test', ()=>{

    const tagArray = ['wits100', 'dfmpc', 'sd'];
    const tagName = 'sd';

    test('Render Div', ()=>{
        const {getByTestId} = render(<ViewTag tagArray = {tagArray} tagName = {tagName} i = {2}/>);
        const d = getByTestId('view-tag-div');
        expect(d).toBeTruthy();
    });

    test('onDelete', ()=>{
        const {getByTestId} = render(<ViewTag tagArray = {tagArray} tagName = {tagName} i = {2}/>);
        const cl = getByTestId('view-tag-cl');
        fireEvent.click(cl);
       
    });
});


