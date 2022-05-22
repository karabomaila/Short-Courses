import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddComment from '../AddComment';
import ShowComments from '../ShowComments';
import { act } from 'react-dom/test-utils';

describe('Add Comment Test', ()=>{

    test('Render Div', ()=>{
        const userID = '2381410';
        const userName = 'Given';
        const courseID = '2381410CGV00';
        const courseName = 'Computer Course';

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<AddComment open = {true} 
            userID = {userID}
            userName = {userName}
            courseID = {courseID}
            courseName = {courseName}
            close = {useHook}/>);
        const d = getByTestId('add-div');
        expect(d).toBeTruthy();
    });

    test('Cancel Button', ()=>{
        const userID = '2381410';
        const userName = 'Given';
        const courseID = '2381410CGV00';
        const courseName = 'Computer Course';

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<AddComment open = {true} 
            userID = {userID}
            userName = {userName}
            courseID = {courseID}
            courseName = {courseName}
            close = {useHook}/>);
        const btn = getByTestId('add-cancel');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Cancel');
    });

    test('Comment Button', ()=>{
        const userID = '2381410';
        const userName = 'Given';
        const courseID = '2381410CGV00';
        const courseName = 'Computer Course';

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<AddComment open = {true} 
            userID = {userID}
            userName = {userName}
            courseID = {courseID}
            courseName = {courseName}
            close = {useHook}/>);
        const btn = getByTestId('add-comment');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Comment');
    }); 
});


describe('Show Comments Test', ()=>{

    test('When undefined ', ()=>{
        const {getByTestId} = render(<ShowComments comments = {undefined}/>)
    });

    test('Show Data', ()=>{
        const data = [{mapValue:{fields: {userName:{stringValue: "Tamlin Love"}, comment:{stringValue: "Last"}}}}];
        const {getByTestId} = render(<ShowComments comments = {data}/>)
    });
});


