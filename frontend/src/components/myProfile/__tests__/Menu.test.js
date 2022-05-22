import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Menu from '../Menu';

describe('Menu Test', ()=>{

    test('Username Test1', ()=>{
        const name = 'Given Mathebula'
        const {getByTestId} = render(<Menu name = {name}/>);
        const user = getByTestId("men-name");
        expect(user.innerHTML).toEqual(name);
    });

    test('Username Test2', ()=>{
        const name = 'Tamlin Love'
        const {getByTestId} = render(<Menu name = {name}/>);
        const user = getByTestId("men-name");
        expect(user.innerHTML).toEqual(name);
    });

});


