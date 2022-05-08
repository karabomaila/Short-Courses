import React from 'react';
import {render} from '@testing-library/react';
import TagsInput from '../TagsInput';

describe('TagsInput - Textfiels', ()=>{

    const tagArray = ['#new', '#tag'];
    const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
    const textfield = getByTestId("test-textfield");

    test('Textfield Renders', ()=>{
        expect(textfield).toBeTruthy();
    })

   
    
})

/*
describe('TagsInput - Button', ()=>{
    const tagArray = ['#new', '#tag'];
    const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
    const button = getByTestId("test-tags-button");

    test('Buttom Renders', ()=>{
        expect(button).toBeTruthy();
    })
})
*/