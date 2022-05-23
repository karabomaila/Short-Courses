import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RightPanel from "../RightPanel";
import DragAndDropTemp from "../DragAndDropTemp";
import Main from "../Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

afterEach(cleanup);

const props = {
  course: {
    name: "Course Name",
    courseID: "23552850Cee1",
    description: "Very important des",
    images: [
      {
        id: 0,
        url: "data:image/jpeg;base64,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",
      },
    ],
  },
  user: [
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
  ],
};

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

test("icons present", () => {
  render(
    <BrowserRouter>
      <Main {...props} />
    </BrowserRouter>
  );

  const text = screen.getByTestId("Texttest");
  const video = screen.getByTestId("Videotest");
  const image = screen.getByTestId("Imagetest");

  expect(text).toBeInTheDocument();
  expect(video).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  // expect(listItem).toBe
});

test("canvas", () => {
  render(
    <BrowserRouter>
      <Main {...props} />
    </BrowserRouter>
  );

  const canvas = screen.getByTestId("canvasTest");

  const text = screen.getByTestId("Texttest");
  fireEvent.mouseDown(text, { which: 1, button: 0 });
  fireEvent.dragStart(text);
  screen.debug();
  fireEvent.dragEnter(canvas);
  fireEvent.drop(canvas);
  fireEvent.dragLeave(canvas);
  fireEvent.dragEnd(text);

  const propertiesAcc = screen.getByTestId("propertiesAcc");
  fireEvent.click(propertiesAcc);

  

  // expect(listItem).toBeInTheDocument();

  expect(canvas).toBeInTheDocument();

  // expect(text).toBeInTheDocument();
  // expect(video).toBeInTheDocument();
  // expect(image).toBeInTheDocument();
  // expect(listItem).toBe
});

// test("Force", () => {
//   render(
//     <BrowserRouter>
//       <DragAndDropTemp
//         canvasTools={canvasTools}
//         despatch={()=>{}}
//         setCanvasTools={()=>{}}
//         setOpen4={()=>{}}
//         setDisplayAlert={()=>{}}
//         chapters={[]}
//         edit={false}
//         saveSlide={()=>{}}
//       />
//     </BrowserRouter>
//   );

//   const text2 = screen.getByPlaceholderText("Text")

//   const text = screen.getByTestId("Texttest");
//   const video = screen.getByTestId("Videotest");
//   const image = screen.getByTestId("Imagetest");

//   expect(text).toBeInTheDocument();
//   expect(video).toBeInTheDocument();
//   expect(image).toBeInTheDocument();
// //   expect(text2 ).toBeInTheDocument();

// });
