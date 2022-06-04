import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SlideCard from '../components/SlideCard';

describe('Slide Card Test', ()=>{

    test('Render Div', ()=>{
        const slide = {Title: 'title', Body: 'body'}
        const {getByTestId} = render(<SlideCard slide = {slide}/>);
        const d = getByTestId('slide-div');
        expect(d).toBeTruthy();
    });

    test('onClick Slide Paper', ()=>{
        const slide = {Title: 'title', Body: 'body'}
        const {getByTestId} = render(<SlideCard slide = {slide}/>);
        const p = getByTestId('slide-paper');
        fireEvent.click(p);
    });
});



