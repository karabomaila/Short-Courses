import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Firstpanel from '../components/Firstpanel';

describe('First Panel Test', ()=>{

    test('Render Div', ()=>{
        const {getByTestId} = render(<Firstpanel />);
        const d = getByTestId('first-panel-div');
        expect(d).toBeTruthy();
    });

   
});




