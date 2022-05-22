import React from "react";
import { render, screen } from '@testing-library/react';
import Form from "./form";
import Header from "./header";

describe(" header componet",()=>{

    it("rendered header",()=>{
        const {getByTestId} = render(<Header/>);
        const input=getByTestId("head");
        expect(input).toBeTruthy();
    });

    it("rendered notes",()=>{
        const {getByTestId} = render(<Header/>);
        const Addbtn=getByTestId("notes");
        expect(Addbtn).toBeTruthy();
    });

   
})