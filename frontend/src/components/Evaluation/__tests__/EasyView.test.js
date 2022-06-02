import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import EasyView from '../EasyView';

describe('EasyView Test', ()=>{

    test('Radio Test', ()=>{
        const item = {type: 'radio', content: 'some radio', array: ['a', 'b', 'c']};
        const {getByTestId} = render(<EasyView item = {item}/>);
        const d = getByTestId('easy-radio-div');
        expect(d).toBeTruthy();
    });

    test('Box Test', ()=>{
        const item = {type: 'box', content: 'some box'};
        const {getByTestId} = render(<EasyView item = {item}/>);
        const d = getByTestId('easy-box-div');
        expect(d).toBeTruthy();
    });

    test('Slider Test', ()=>{
        const item = {type: 'slider', content: 'some slider'};
        const {getByTestId} = render(<EasyView item = {item}/>);
        const d = getByTestId('easy-slider-div');
        expect(d).toBeTruthy();
    });

});




