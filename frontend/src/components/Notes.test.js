import React from "react";
import { ReactDOM } from "react-dom";
import Note from "./Notes";
import { render, screen } from '@testing-library/react';

it("rendered header",()=>{
    const {getByTestId} = render(<Note/>);
    const input1=getByTestId("header");
    expect(input1).toBeTruthy();
});

it("rendered list",()=>{
    const {getByTestId} = render(<Note/>);
    const input2=getByTestId("list");
    expect(input2).toBeTruthy();
});

it("rendered form",()=>{
    const {getByTestId} = render(<Note/>);
    const input3=getByTestId("form");
    expect(input3).toBeTruthy();
});
   
it("rendered container",()=>{
    const {getByTestId} = render(<Note/>);
    const input2=getByTestId("container");
    expect(input2).toBeTruthy();
});

it("rendered app-wrapper",()=>{
    const {getByTestId} = render(<Note/>);
    const input3=getByTestId("app-wrapper");
    expect(input3).toBeTruthy();
});
