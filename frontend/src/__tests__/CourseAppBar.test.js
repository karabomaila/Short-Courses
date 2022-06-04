import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CourseAppBar from '../components/CourseAppBar';

describe('Course App Bar Test', ()=>{
    
    test('Render', ()=>{
        const {getByTestId} = render(<CourseAppBar />);
        const d = getByTestId("app-test");
        expect(d).toBeTruthy();
    })
})
