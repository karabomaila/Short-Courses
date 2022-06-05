import React from "react";
import {render} from '@testing-library/react';
import Hub from "../Hub";

describe('Hub Test', ()=>{

    test('Render Main Div', ()=>{
        const user = {userID: '2381410@students.wits.ac.za', courseID: '2381410CGV11', courseName: 'Computer Graplics'};
        const {getByTestId} = render(<Hub user = {user}/>);
        const d = getByTestId('hub-div');
        expect(d).toBeTruthy();
    })
})


