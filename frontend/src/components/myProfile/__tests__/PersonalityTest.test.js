import React from 'react';
import { render } from '@testing-library/react';
import PersonalityTest from '../PersonalityTest';

describe('Personality Test', ()=>{
    

    test('Render Div', ()=>{
        const {getByTestId} = render(<PersonalityTest userID = '2381410@students.wits.ac.za' />);
        const d = getByTestId('pers-div');
        expect(d).toBeTruthy();
    });
    
    test('Test Show Heading', ()=>{
        const {getByTestId} = render(<PersonalityTest userID = 'a0074560@wits.ac.za' />);
        const head = getByTestId('pers-head');
        expect(head.innerHTML).toEqual('PERSONALITY TEST');
    });


})