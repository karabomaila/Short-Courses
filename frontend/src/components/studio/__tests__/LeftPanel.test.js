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
//     const { getByTestId } = render(
//         <BrowserRouter>
//             <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
//         </BrowserRouter>);

//     const SaveButton = getByTestId("SaveButton");
//     fireEvent.click(SaveButton)

//     const btnEl = getByTestId("Datafirst");
//     expect(btnEl.textContent).toBe("Please create a chapter first")

// });

test("DataOutcomes", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const DataOutcomes = getByTestId("DataOutcomes");
    expect(DataOutcomes.textContent).toBe("Please specify the learning outcomes of this chapter")

});

test("Hearder", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const showPanel = getByTestId("showPanel");
    fireEvent.click(showPanel)

    const hearder = getByTestId("hearder");
    expect(hearder.textContent).toBe("Course Content")

});

test("NewChapterButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const showPanel = getByTestId("showPanel");
    fireEvent.click(showPanel)

    const NewChapterButton = getByTestId("NewChapterButton");
    expect(NewChapterButton.textContent).toBe("New Chapter")

});

test("AddButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const AddButton = getByTestId("AddButton");
    expect(AddButton.textContent).toBe("Add")

});

test("CancelButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const CancelButton = getByTestId("CancelButton");
    expect(CancelButton.textContent).toBe("CANCEL")

});

test("SaveSlide", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const SaveSlide = getByTestId("SaveSlide");
    expect(SaveSlide.textContent).toBe("Save Slide")

});

test("EstimatedDuration", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const EstimatedDuration = getByTestId("EstimatedDuration");
    expect(EstimatedDuration.textContent).toBe("Estimated slide duration")

});

test("SaveButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const SaveButton = getByTestId("SaveButton");
    expect(SaveButton.textContent).toBe("Save")

});

test("NextButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const NextButton = getByTestId("NextButton");

    expect(NextButton.textContent).toBe("NEXT")

});

test("ChapterName ", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const ChapterName = getByTestId("ChapterName").getAttribute("placeholder");
    expect(ChapterName).toBe("ChapterName")

});

test("NewSlideButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const ChapterName = getByTestId("ChapterName");
    fireEvent.change(ChapterName, { target: { value: "Chapter3" } })

    const NextButton = getByTestId("NextButton");
    fireEvent.click(NextButton)

    const showPanel = getByTestId("showPanel");
    fireEvent.click(showPanel)

    const Accordion = getByTestId("Accordion");
    fireEvent.click(Accordion)
    // Accordion

    const NewSlideButton = getByTestId("NewSlideButton");
    expect(NewSlideButton.textContent).toBe("New Slide")

});

test("OutcomesButton", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Leftpanel canvasTools={canvasTools} despatch={() => { }} setCanvasTools={() => { }} course={{ name: "Coursename", courseID: "26385385", description: "description" }} user={accounts} />
        </BrowserRouter>);

    const ChapterName = getByTestId("ChapterName");
    fireEvent.change(ChapterName, { target: { value: "Chapter3" } })

    const NextButton = getByTestId("NextButton");
    fireEvent.click(NextButton)

    const showPanel = getByTestId("showPanel");
    fireEvent.click(showPanel)

    const Accordion = getByTestId("Accordion");
    fireEvent.click(Accordion)

    const OutcomesButton = getByTestId("OutcomesButton");
    expect(OutcomesButton.textContent).toBe("Outcomes")

});


