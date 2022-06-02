import {render} from '@testing-library/react';
import React from 'react';
import DefaultEvaluation from '../DefaultEvaluation';

describe('Default Evaluation Test', ()=>{

    test('Render Main Div', ()=>{
        const {getByTestId} = render(<DefaultEvaluation courseName = 'Test Name'/>);
        const d = getByTestId('def-div');
        expect(d).toBeTruthy();
    });

});








