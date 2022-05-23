import React from "react";
// import Navigation from "../components/navigation";
// import Home from "../components/home";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leftpanel from "../Leftpanel";


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
const canvasTools = [
    {
        _id: 1653242196015,
        position: {
            top: 115,
            left: 220,
        },
        type: "text",
        content: "",
        fontSize: 20,
        width: 100,
        height: 50,
    },
    {
        _id: 1653242197288,
        position: {
            top: 0,
            left: 460,
        },
        type: "image",
        url: "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
        width: 300,
        height: 200,
    },
];

// test("Datafirst", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Leftpanel canvasTools={canvasTools} despatch= {()=>{}} setCanvasTools={()=>{}} course={{name:"Coursename", courseID:"26385385", description:"description"}} user={accounts} />
//     </BrowserRouter>);

//     const btnEl = getByTestId("Datafirst");

//     expect(btnEl.textContent).toBe("Please create a chapter first")

// });

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("DataOutcomes");

    expect(searchText.textContent).toBe("Please specify the learning outcomes of this chapter")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const button = getByTestId("showPanel");
    fireEvent.click(button)
    const searchText = getByTestId("hearder");

    expect(searchText.textContent).toBe("Course Content")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const button = getByTestId("showPanel");
    fireEvent.click(button)
    const searchText = getByTestId("NewChapterButton");

    expect(searchText.textContent).toBe("New Chapter")

});

// test("Seach text", () => {
//     const { getByTestId } = render(
//         <BrowserRouter>
//             <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
//         </BrowserRouter>);

//     const button = getByTestId("showPanel");
//     fireEvent.click(button)
//     const searchText = getByTestId("OutcomesButton");

//     expect(searchText.textContent).toBe("Outcomes")

// });

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("AddButton");

    expect(searchText.textContent).toBe("Add")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("CancelButton");

    expect(searchText.textContent).toBe("CANCEL")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("SaveSlide");

    expect(searchText.textContent).toBe("Save Slide")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("EstimatedDuration");

    expect(searchText.textContent).toBe("Estimated slide duration")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("SaveButton");

    expect(searchText.textContent).toBe("Save")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("NextButton");

    expect(searchText.textContent).toBe("NEXT")

});

test("Seach text", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const searchText = getByTestId("ChapterName");

    expect(searchText.textContent).toBe("ChapterName")

});

// test("Seach text", () => {
//     const { getByTestId } = render(
//         <BrowserRouter>
//             <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
//         </BrowserRouter>);

//     const button = getByTestId("showPanel");
//     fireEvent.click(button)
//     const button2 = getByTestId("NewChapterButton");
//     fireEvent.click(button2)
//     const ChapterName = getByTestId("ChapterName");
//     fireEvent.change(ChapterName,{target:{value: "Chapter3"}})
//     const NextButton = getByTestId("NextButton");
//     fireEvent.click(NextButton)
//     const Accordion = getByTestId("Accordion");
//     fireEvent.click(Accordion)
//     // Accordion

//     const searchText = getByTestId("NewSlideButton");
//     expect(searchText.textContent).toBe("New Slide")

// });
