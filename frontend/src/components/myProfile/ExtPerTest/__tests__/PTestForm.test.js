import React from 'react';
import { render } from '@testing-library/react';
import PTestForm from '../PTestForm';
// import Quiz from '../Quiz'

describe('Personality Test Form', () => {

    test('Data username - Test', () => {
        const { getByTestId } = render(<PTestForm userID='2381410@students.wits.ac.za' />);
        const data = getByTestId('ptest-data');
        expect(data.innerHTML).toEqual('Data belonging to 2381410@students.wits.ac.za')
    })

    test('Data username - Test2', () => {
        const { getByTestId } = render(<PTestForm userID='a0074560@wits.ac.za' />);
        const data = getByTestId('ptest-data');
        expect(data.innerHTML).toEqual('Data belonging to a0074560@wits.ac.za')
    })

    test('Print Education - Test', () => {
        const { getByTestId } = render(<PTestForm userID='a0074560@wits.ac.za' />);
        const data = getByTestId('ptest-txt3');
        expect(data.innerHTML).toEqual('Education')
    })

    test('Print Interests and Skills - Test', () => {
        const { getByTestId } = render(<PTestForm userID='a0074560@wits.ac.za' />);
        const data = getByTestId('ptest-txt1');
        expect(data.innerHTML).toEqual('Interests and Skills')
    })

    test('Print Favourite Books Read - Test', () => {
        const { getByTestId } = render(<PTestForm userID='a0074560@wits.ac.za' />);
        const data = getByTestId('ptest-txt2');
        expect(data.innerHTML).toEqual('Favourite Books Read')
    })

    test('Print Work - Test', () => {
        const { getByTestId } = render(<PTestForm userID='a0074560@wits.ac.za' />);
        const data = getByTestId('ptest-txt4');
        expect(data.innerHTML).toEqual('Work')
    })

    // test('View Quiz Button', () => {
    //     const questions = []
    //     const { getByTestId } = render(<Quiz modal="Main"
    //         setModal = "Main"
    //         userID='a0074560@wits.ac.za'
    //         questions = "Main" />);
    //     const data = getByTestId('ptest-txt4');
    //     expect(data.innerHTML).toEqual('just');
    // })

})

// cd frontend/src/components/myProfile/ExtPerTest