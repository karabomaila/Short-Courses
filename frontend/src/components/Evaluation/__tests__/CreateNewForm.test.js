import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import CreateNewForm from '../CreateNewForm';
import {DndProvider, useDrop} from 'react-dnd';
import { HTML5Backend} from 'react-dnd-html5-backend';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


export { createTestBackend as default } from 'dnd-core';
describe('Create New Form Test', ()=>{

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        
            const {getByTestId} = render(
                <DndProvider backend={HTML5Backend}>
                <CreateNewForm courseName = 'Some Name' user = {[]} setCreate = {useHook}/>
                </DndProvider>);
            const d = getByTestId('most-complicated-div');
            expect(d).toBeTruthy();
       
        
    });
});


