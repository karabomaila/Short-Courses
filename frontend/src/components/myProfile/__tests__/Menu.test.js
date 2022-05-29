import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Menu from '../Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const accounts = [
    {
        homeAccountId:
            "13196ac7-cf03-45e2-9d14-69d125fca6f6.4b1b908c-5582-4377-ba07-a36d65e34934",
        environment: "login.windows.net",
        tenantId: "4b1b908c-5582-4377-ba07-a36d65e34934",
        username: "2355285@students.wits.ac.za",
        localAccountId: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
        name: "Lindokuhle Mabena",
        idTokenClaims: {
            aud: "5eca034e-a0bb-4fe8-a92b-3aacea48d39e",
            iss: "https://login.microsoftonline.com/4b1b908c-5582-4377-ba07-a36d65e34934/v2.0",
            iat: 1652039967,
            nbf: 1652039967,
            exp: 1652043867,
            name: "Lindokuhle Mabena",
            nonce: "86e8bf29-8e23-4769-bbbb-d18130e9a57a",
            oid: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
            preferred_username: "2355285@students.wits.ac.za",
            rh: "0.ARAAjJAbS4JVd0O6B6NtZeNJNE4Dyl67oOhPqSs6rOpI054QAAc.",
            sub: "RSY0opS1E7y_czd0TaJd6VQeN-5MqCTK-2cHcM4VDp8",
            tid: "4b1b908c-5582-4377-ba07-a36d65e34934",
            uti: "MRYUnQmt5kSPCUo_oQMVAA",
            ver: "2.0",
        },
    },
];


describe('Menu Test', () => {

    test('Username Test1', () => {
        const name = 'Given Mathebula'
        const { getByTestId } = render(<Menu name={name} />);
        const user = getByTestId("men-name");
        expect(user.innerHTML).toEqual(name);
    });

    test('Username Test2', () => {
        const name = 'Tamlin Love'
        const { getByTestId } = render(<Menu name={name} />);
        const user = getByTestId("men-name");
        expect(user.innerHTML).toEqual(name);
    });

    test("Expose View Button", () => {
        const name = 'Nkosinathi Chuma'
        const { getByTestId } = render(<Menu name={name}/>)
        const ExposeViewBtn = getByTestId("ExposeView");
        expect(ExposeViewBtn.textContent).toBe("Expose View")

    });



});


