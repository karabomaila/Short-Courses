import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TagsInput from '../TagsInput';
import { assert, async } from '@firebase/util';
import { act } from 'react-dom/test-utils';

describe('TagsInput - Textfiels', ()=>{


    

    test('Textfield Renders', ()=>{
        const tagArray = ['#new', '#tag'];
        const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
        const textfield = getByTestId("test-textfield");
        expect(textfield).toBeTruthy();
    })

    test('Div Renders', ()=>{
        const tagArray = ['#new', '#tag'];
        const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
        const textfield = getByTestId("tgs-div");
        expect(textfield).toBeTruthy();
    })

    test('Button Text', ()=>{
        const tagArray = ['#new', '#tag'];
        const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
        const btn = getByTestId("test-tags-button");
        expect(btn).toHaveTextContent('Add');
    })

    test('onClick', async ()=>{

        await act(async()=>{
            const tagArray = ['#new', '#tag'];
            const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
            const textfield = getByTestId("test-textfield");
            const btn = getByTestId("test-tags-button");
    
            fireEvent.change(textfield, {target: {value: 'hashtag'}});
            fireEvent.click(btn);
    
            expect(btn).toHaveTextContent('Add');
        })
    })

    test('onClick TEST2', async ()=>{

        await act(async()=>{
            const tagArray = ['#new', '#tag'];
            const {getByTestId} = render(<TagsInput tagArray = {tagArray}/>);
            const textfield = getByTestId("test-textfield");
            const btn = getByTestId("test-tags-button");
    
            await fireEvent.change(textfield, {target: {value: '#hashtag'}});
            fireEvent.click(btn);
    
            expect(btn).toHaveTextContent('Add');
        })
    })
    



   
    
})
