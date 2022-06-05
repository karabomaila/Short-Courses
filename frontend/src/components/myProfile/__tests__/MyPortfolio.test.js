import React from "react";
import {render} from '@testing-library/react';
import MyPortfolio from '../MyPortfolio';

describe('My Profile Test', ()=>{

    test('Render Div', ()=>{
        const user = {name: 'Given Mathebula', username: '2381410@students.wits.ac.za'};
        const {getByTestId} = render(<MyPortfolio user = {user}/>);
        const d = getByTestId('port-div');
        expect(d).toBeTruthy();
    })
});


