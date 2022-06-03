import React from "react";
import {fireEvent, render} from '@testing-library/react';
import Actions from "../Actions";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Actions Test', ()=>{

    const data = [
        {courseID: '2022ml', description: 'ML Course', 
        content: [{outcomes: ['Out1', 'Out2', 'Out3'], slides:[{duration: 2}, {duration: 5}]}, 
        {outcomes: ['Out4', 'Out5', 'Out6'], slides:[{duration: 10}, {duration: 22}]}]},

        {courseID: '2022cv', description: 'CGV Course', 
        content: [{outcomes: ['Out8', 'Out11'], slides:[{duration: 60}, {duration: 19}]}]},

        {courseID: '2022fa', description: 'FLA Course', 
        content: [{outcomes: ['Out110', 'Out200', 'Out200'], slides:[{duration: 12}, {duration: 59}]}, 
        {outcomes: ['Out100', 'Out110', 'Out0'], slides:[{duration: 10}]},
        {outcomes: ['Out77', 'Out51', 'Out61'], slides:[{duration: 110}]}]}, 

        {courseID: '2022sd', description: 'SD Course', 
        content: [{outcomes: [], slides:[{duration: 10}, {duration: 25}]}]}

    ]

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }


    test('onClick View', ()=>{

        const title = 'View';
        const click = 'view';
        const userID = '2381410@students.wits.ac.za';
        const userName = 'Given NG Mathebula';
        const courseID = '2381410MC11';
        const courseName = 'Mobile Computing';
        const user = [];


        const {getByTestId} = render(<Actions crs_id = {courseID} courseID = {courseID}
        courseName = {courseName} name = {courseName} userName = {userName} title = {title}
        click = {click} user = {user} userID = {userID} info = {data} setDataObject = {useHook}
        setOpenAbout = {useHook}/>);
        const btn = getByTestId('ui-action');
        fireEvent.click(btn);
    });
});




