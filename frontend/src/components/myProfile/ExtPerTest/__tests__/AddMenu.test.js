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


    test('onClick Skills', ()=>{
        const data = [{stringValue: 'Skill'}];
        const {getByTestId} = render(<AddMenu click = 'skills'
        type = 'skills'
        data = {data}
        skillVisible = {useHook}/>)

    const icon = getByTestId('add-icon');
    fireEvent.click(icon);
    });

    test('onClick Work', ()=>{
        const data = [{mapValue: {fields: {company:{stringValue: 'Company'}, occupation:{stringValue: 'Occupation'}, years:{stringValue: '2022-'}}}}];
        const {getByTestId} = render(<AddMenu click = 'work'
        type = 'work'
        data = {data}
        workVisible = {useHook}/>)

    const icon = getByTestId('add-icon');
    fireEvent.click(icon);
    });

    test('onClick Education', ()=>{
        const data = [{mapValue: {fields: {institution:{stringValue: 'Company'}, qualification:{stringValue: 'Occupation'}, years:{stringValue: '2022-'}}}}];
        const {getByTestId} = render(<AddMenu click = 'edu'
        type = 'edu'
        data = {data}
        eduVisible = {useHook}/>)

    const icon = getByTestId('add-icon');
    fireEvent.click(icon);
    });
});




