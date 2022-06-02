import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import DropDialog from '../DropDialog';

describe('Drop Dialog Test', ()=>{

    const onHook = (bool)=>{
        let val = true;
        return val = bool;
    }

    const droppedItems = ['a', 'b'];

    test('Render Div', ()=>{
        const {getByTestId} = render(<DropDialog setOpenDialog = {onHook} type = 'box'
                setDroppedItems = {onHook} open = {true} droppedItems = {droppedItems}/>);
        const d = getByTestId('drop-dialog-test');
        expect(d).toBeTruthy();
    });

    test('onClick Test Box', ()=>{
        const {getByTestId} = render(<DropDialog setOpenDialog = {onHook} type = 'box'
                setDroppedItems = {onHook} open = {true} droppedItems = {droppedItems}/>);
        const btn = getByTestId('drop-dialog-button');
        fireEvent.click(btn);
    });

    test('onClick Test Slider', ()=>{
        const {getByTestId} = render(<DropDialog setOpenDialog = {onHook} type = 'slider'
                setDroppedItems = {onHook} open = {true} droppedItems = {droppedItems}/>);
        const btn = getByTestId('drop-dialog-button');
        fireEvent.click(btn);
    });

    test('onClick Test Radio', ()=>{
        const {getByTestId} = render(<DropDialog setOpenDialog = {onHook} type = 'radio'
                setDroppedItems = {onHook} open = {true} droppedItems = {droppedItems}/>);
        const btn = getByTestId('drop-dialog-button');
        fireEvent.click(btn);
    });


    
});


