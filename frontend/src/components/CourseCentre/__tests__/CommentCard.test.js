import React from 'react';
import { render } from '@testing-library/react';
import CommentCard from '../CommentCard';

describe('Comment Card Test', ()=>{

    test('Username Test', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Given Mathebula"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-usr");
        expect(tst.innerHTML).toEqual("Given Mathebula");

    });

    test('Username Test2', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Lindokuhle Mabena"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-usr");
        expect(tst.innerHTML).toEqual("Lindokuhle Mabena");

    });

    test('Initials Test', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Given Mathebula"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-ini");
        expect(tst.innerHTML).toEqual("GM");

    });

    test('Initials Test2', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Lindokuhle Mabena"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-ini");
        expect(tst.innerHTML).toEqual("LM");

    });

    test('Initials Test3', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Tamlin Love"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-ini");
        expect(tst.innerHTML).toEqual("TL");

    });

    test('Comment Test', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Tamlin Love"}, comment:{stringValue: "Demo Comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-com");
        expect(tst.innerHTML).toEqual("Demo Comment");

    });

    test('Comment Test2', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Tamlin Love"}, comment:{stringValue: "Another test for comment"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-com");
        expect(tst.innerHTML).toEqual("Another test for comment");

    });

    test('Comment Test3', ()=>{
        const comment = {mapValue:{fields: {userName:{stringValue: "Tamlin Love"}, comment:{stringValue: "Last"}}}};
        const {getByTestId} = render(<CommentCard comment = {comment}/>);
        const tst = getByTestId("com-test-com");
        expect(tst.innerHTML).toEqual("Last");

    });
});