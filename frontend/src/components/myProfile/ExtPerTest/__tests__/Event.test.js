import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Event from '../Event';


describe('Event Test', ()=>{

    function useHook(bool){
        let hook = false;
        return hook = bool;
    }

    test('Test1', ()=>{
        const {getByTestId} = render(<Event title = 'View Prev' click = 'view' setModal = {useHook}/>);
        const btn = getByTestId('test-view');
        expect(btn).toHaveTextContent('View Prev');
    })

    test('Test2', ()=>{
        const {getByTestId} = render(<Event title = 'View Prev' click = 'view' setModal = {useHook}/>);
        const btn = getByTestId('test-view');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('View Prev');
    })

    test('Test3', ()=>{
        const {getByTestId} = render(<Event title = 'Take Quiz' click = 'quiz' setModal = {useHook}/>);
        const btn = getByTestId('test-quiz');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Take Quiz');
    })


    test('Test4', ()=>{
        const {getByTestId} = render(<Event title = 'Done' click = 'main' setModal = {useHook}/>);
        const btn = getByTestId('test-main');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Done');
    })

    test('Test5', ()=>{
        const {getByTestId} = render(<Event title = 'Next' click = 'next' setModal = {useHook}
        nextIndex = {2}
        setNextIndex = {useHook}
        len = {5}/>);
        const btn = getByTestId('test-next');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Next');
    })

    test('Test 6 Major', ()=>{

        const MAX_QS = 5;
        const userID = '2381410';


        const {getByTestId} = render(<Event title = 'No' 
        click = 'no' 
        size = {MAX_QS}
        userID = {userID}
        question = {'Yes or no?'}
        answer = {new Array()}
        setAnswer= {useHook}
        setModal = {useHook}
        setIndex = {useHook} 
        index = {2}/>);

        const btn = getByTestId('test-no');
        fireEvent.click(btn);
    })

    test('Test 7 Major', ()=>{

        const MAX_QS = 2;
        const userID = '2381410';


        const {getByTestId} = render(<Event title = 'Yes' 
        click = 'yes' 
        size = {MAX_QS}
        userID = {userID}
        question = {'Yes or no?'}
        answer = {new Array()}
        setAnswer= {useHook}
        setModal = {useHook}
        setIndex = {useHook} 
        index = {2}/>);

        const btn = getByTestId('test-yes');
        fireEvent.click(btn);
    })




});


