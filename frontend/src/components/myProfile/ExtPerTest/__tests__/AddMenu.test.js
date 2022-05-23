import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddMenu from '../AddMenu';


describe('Add Menu Test', ()=>{

    function useHook(bool){
        let hook = false;
        return hook = bool;
    }

    

    test('Test Icon', ()=>{
        const data = [{mapValue: {fields: {author:{stringValue: 'Author'}, title:{stringValue: 'Title'}}}}];
        const {getByTestId} = render(<AddMenu click = 'books'
        type = 'books'
        data = {data}
        booksVisible = {useHook}/>)

    const icon = getByTestId('add-icon');
    expect(icon).toBeTruthy();

    });

    test('onClick Books', ()=>{
        const data = [{mapValue: {fields: {author:{stringValue: 'Author'}, title:{stringValue: 'Title'}}}}];
        const {getByTestId} = render(<AddMenu click = 'books'
        type = 'books'
        data = {data}
        booksVisible = {useHook}/>)

    const icon = getByTestId('add-icon');
    fireEvent.click(icon);
    });
});




