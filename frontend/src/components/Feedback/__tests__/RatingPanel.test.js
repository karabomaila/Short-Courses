import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import RatingPanel from '../RatingPanel';
import FeedBackDialog from '../FeedbackDialog';
import UploadImagePanel from '../UploadImagePanel';


describe('Rating Panel Test', ()=>{


    test('Div Test', ()=>{
        const {getByTestId} = render(<RatingPanel />);
        const d = getByTestId('rate-div');
        expect(d).toBeTruthy();
    });


});

describe('Feedback Test', ()=>{


    test('Div Test', ()=>{
        const {getByTestId} = render(<FeedBackDialog />);
        const d = getByTestId('feed-div');
        expect(d).toBeTruthy();
    });


});

describe('Upload Image Test', ()=>{


    test('Div Test', ()=>{
        const {getByTestId} = render(<UploadImagePanel />);
        const d = getByTestId('up-div');
        expect(d).toBeTruthy();
    });


});


