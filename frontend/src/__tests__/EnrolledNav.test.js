import React from "react";
import EnrolledNav from "../components/EnrolledNav";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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


test("Home Button", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <EnrolledNav user={accounts} />
    </BrowserRouter>);

    const homeBtn = getByTestId("homeBtn");

    expect(homeBtn.textContent).toBe("Home")

});

test("Enrolled Button", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <EnrolledNav user={accounts} />
    </BrowserRouter>);

    const enrolledBtn = getByTestId("enrolledBtn");

    expect(enrolledBtn.textContent).toBe("Enrolled")

});

test("MyCourse Button", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <EnrolledNav user={accounts} />
      </BrowserRouter>);
  
      const myCoursesBtn = getByTestId("myCoursesBtn");
  
      expect(myCoursesBtn.textContent).toBe("MyCourses")
  
  });


