import React from "react";
import { render, screen } from '@testing-library/react';
import Form from "./form";

describe(" form componet",()=>{

    it("rendered input",()=>{
        const {getByTestId} = render(<Form/>);
        const input=getByTestId("inputbox");
        expect(input).toBeTruthy();
    });

    it("rendered Add btn",()=>{
        const {getByTestId} = render(<Form/>);
        const Addbtn=getByTestId("addbtn");
        expect(Addbtn).toBeTruthy();
    });

    it("rendered big",()=>{
        const {getByTestId} = render(<Form/>);
        const Addbtn=getByTestId("big");
        expect(Addbtn).toBeTruthy();
    });
})