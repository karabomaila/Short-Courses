import React from "react";
import {render} from '@testing-library/react';
import EnrolledCard from "../EnrolledCard";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Enrolled Card Test', ()=>{

    test('Render Div', ()=>{
        const {getByTestId} = render(<EnrolledCard />);
        const d = getByTestId("en-ui-div");
        expect(d).toBeTruthy();
    });
})





