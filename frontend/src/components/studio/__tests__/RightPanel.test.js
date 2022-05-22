import React from "react";
import { render, fireEvent, cleanup,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RightPanel from "../RightPanel";
import Main from ""


afterEach(cleanup);

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

test("First Accordion", () => {
  const { getByTestId } = render(
    <RightPanel canvasTools={canvasTools} setCanvasTools={() => {}} />
  );

  const element = getByTestId("firstAcc");

  expect(element.textContent).toBe("Properties");
});

test("Second Accordion", () => {
  const { getByTestId } = render(
    <RightPanel canvasTools={canvasTools} setCanvasTools={() => {}} />
  );

  const element = getByTestId("secondAcc");

  expect(element.textContent).toBe("Components");
});

test("Third Accordion", () => {
  const { getByTestId } = render(
    <RightPanel canvasTools={canvasTools} setCanvasTools={() => {}} />
  );

  const element = getByTestId("thirdAcc");

  expect(element.textContent).toBe("Templates");
});

test("Initial width and height", () => {
    render(
      <RightPanel canvasTools={canvasTools} setCanvasTools={() => {}} />
    );
  
    const element = screen.getByTestId("propertiesAcc")
    fireEvent.click(element);

    const width = screen.getByTestId("width");
    const height = screen.getByTestId("height");

  
    expect(width.value).toBe(window.innerWidth.toString());
    expect(height.value).toBe(window.innerHeight.toString());
    
  });

  test("list Item", () => {
    render(
      <RightPanel canvasTools={canvasTools} setCanvasTools={() => {}} />
    );
  
    
    const propertiesAcc = screen.getByTestId("propertiesAcc")
    fireEvent.click(propertiesAcc);

    const listItem = screen.getByTestId("0text")


  
    expect(listItem).toBeInTheDocument();
    
    
  });

//   test("drag", () => {
//     render(
//       <Main />
//     );
  
    
//     const propertiesAcc = screen.getByTestId("propertiesAcc")
//     fireEvent.click(propertiesAcc);

//     const listItem = screen.getByTestId("0text")


  
//     expect(listItem).toBeInTheDocument();
    
    
//   });
