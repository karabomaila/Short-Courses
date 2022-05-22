import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Actions from '../Actions';
import { useState } from 'react';

describe('Course Centre Action Test', ()=>{

    test('Rate Test', ()=>{

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<Actions title = 'Rate' 
        click = 'rate' openFeedb = {useHook}/>);

        const btn = getByTestId('act-btn');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Rate');
       
    });

    test('About Test', ()=>{

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<Actions title = 'About' 
        click = 'about' openAbout = {useHook}/>);

        const btn = getByTestId('act-btn');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('About');
       
    });

    test('Comment Test', ()=>{

        function useHook(bool){
            let hook = false;
            return hook = bool;
        }

        const {getByTestId} = render(<Actions title = 'Comment' 
        click = 'comment' openComment = {useHook}/>);

        const btn = getByTestId('act-btn');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Comment');
       
    });


    test('Comment Test', ()=>{
        const {getByTestId} = render(<Actions title = 'Title'/>);
        const btn = getByTestId('act-btn');
        fireEvent.click(btn);
        expect(btn).toHaveTextContent('Title');
       
    });
   
    

});

