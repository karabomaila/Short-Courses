import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CourseList from '../components/CourseList';


describe('Course List Test', ()=>{

    const user = [
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
            iat: 1653251278,
            nbf: 1653251278,
            exp: 1653255178,
            name: "Lindokuhle Mabena",
            nonce: "d65024a8-0af6-4cd6-ac5e-83c3e17ffde8",
            oid: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
            preferred_username: "2355285@students.wits.ac.za",
            rh: "0.ARAAjJAbS4JVd0O6B6NtZeNJNE4Dyl67oOhPqSs6rOpI054QAAc.",
            sub: "RSY0opS1E7y_czd0TaJd6VQeN-5MqCTK-2cHcM4VDp8",
            tid: "4b1b908c-5582-4377-ba07-a36d65e34934",
            uti: "_fJYRMkUGU6nBDb0pIFDAA",
            ver: "2.0",
          },
        },
      ];

    test('Render Div', ()=>{
        const {getByTestId} = render(<CourseList user = {user}/>);
        const d = getByTestId('course-list-div');
        expect(d).toBeTruthy();
    });
});

