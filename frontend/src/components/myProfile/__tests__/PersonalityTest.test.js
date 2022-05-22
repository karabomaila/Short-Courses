import React from 'react';
import { render } from '@testing-library/react';
import PersonalityTest from '../PersonalityTest';

describe('Personality Test, Tests', ()=>{
    

    test('Render Div', ()=>{
        const {getByTestId} = render(<PersonalityTest userID = '000000' />);
        const d = getByTestId('pers-div');
        expect(d).toBeTruthy();
    })

    test('Test Show Heading', ()=>{
        const {getByTestId} = render(<PersonalityTest userID = '000000' />);
        const head = getByTestId('pers-head');
        expect(head.innerHTML).toEqual('PERSONALITY TEST');
    })


})