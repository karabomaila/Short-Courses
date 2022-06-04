import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Notes from '../Notes';


describe('Notes Test', ()=>{

    test('Render Div', ()=>{
        const {getByTestId} = render(<Notes userID = '2381410@wits.ac.za'/>);
        const d = getByTestId('nts-div');
        expect(d).toBeTruthy();
    });

    
});




