import React from "react";
import {render} from '@testing-library/react';
import MyCourseCard from "../MyCourseCard";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('My Course Card Test', ()=>{

    test('Render Div', ()=>{
        const {getByTestId} = render(<MyCourseCard />);
        const d = getByTestId("my-ui-div");
        expect(d).toBeTruthy();
    });
})