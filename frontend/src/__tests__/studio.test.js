import React from "react";
import FirstPanel from "../components/FirstPanel";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router-dom";








test("Add Image Btn",()=>{
    const setCourse = ()=>{
    }
    const handletab = (event, num) => {};
    const {getByTestId} = render(<BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <FirstPanel
        handletab={handletab}
        setCourse={setCourse}
      />
    </DndProvider>
  </BrowserRouter>);
  const element2 = getByTestId("addImageBtn");
  expect(element2.textContent).toBe("Add Image ");
  
})

test("next btn", () => {
    const setCourse = ()=>{
    }
    const handletab = (event, num) => {};
    const {getByTestId} = render(<BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <FirstPanel
        handletab={handletab}
        setCourse={setCourse}
      />
    </DndProvider>
  </BrowserRouter>);
  const nextEl = getByTestId("nextBtn");

  expect(nextEl.textContent).toBe("Next ")

})
