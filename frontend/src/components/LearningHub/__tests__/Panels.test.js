import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Navigation from "../Navigation";
import Notes from "../Notes";
import Slideshow from '../Slideshow';
import Slide from '../Slide';
import Chapter from '../Chapter';
import ViewHub from '../ViewHub';

describe('Navigation Test', ()=>{

    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const array = ["a", "b"];
        const {getByTestId} = render(<Navigation array = {array} setShowNav = {useHook}/>);
        const d = getByTestId('nav-div');
        expect(d).toBeTruthy();
    })

    test('onClick', ()=>{
        const array = []
        const {getByTestId} = render(<Navigation array = {array} setShowNav = {useHook}/>);
        const icon = getByTestId('nav-icon');
        fireEvent.click(icon);
    })


})


describe('Notes Test', ()=>{
    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const {getByTestId} = render(<Notes />);
        const d = getByTestId('notes-div');
        expect(d).toBeTruthy();
    })

    test('onClick', ()=>{
        const {getByTestId} = render(<Notes setShowNotes = {useHook}/>);
        const icon = getByTestId('notes-icon');
        fireEvent.click(icon);
    })
})

describe('Slideshow Test', ()=>{
    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const slide = {name: 'name'}
        const {getByTestId} = render(<Slideshow slide={slide}/>);
        const d = getByTestId('slideshow-div');
        expect(d).toBeTruthy();
    })

    test('onClick', ()=>{
        const slide = {name: 'name'}
        const {getByTestId} = render(<Slideshow setOnDisplay = {useHook} slide={slide}/>);
        const icon = getByTestId("slideshow-icon");
        fireEvent.click(icon);
    })
})

describe('Slideshow Test', ()=>{
    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const {getByTestId} = render(<Slide slidesArray={["a", "b"]} />);
        const d = getByTestId('slide-div');
        expect(d).toBeTruthy();
    })

})


describe('Chapter Test', ()=>{
    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    test('Render Div', ()=>{
        const data = {name: 'name'}
        const {getByTestId} = render(<Chapter setGetIndex = {useHook} setView = {useHook} data = {data} index = {2}/>);
        const d = getByTestId('chap-div');
        expect(d).toBeTruthy();
    })

    test('onClick', ()=>{
        const data = {name: 'name'}
        const {getByTestId} = render(<Chapter setGetIndex = {useHook} setView = {useHook} data = {data} index = {1}/>);
        const icon = getByTestId("chap-div");
        fireEvent.click(icon);
    })
})

describe('ViewHub Test', ()=>{
    const useHook = (bool)=>{
        let flag = false;
        return flag = bool;
    }

    const slidesArray = [{content: ["a", "b"]}];

    test('Render Div', ()=>{
        const {getByTestId} = render(<ViewHub slidesArray={slidesArray} setView = {useHook}/>);
        const d = getByTestId('viewhub-div');
        expect(d).toBeTruthy();
    })

})
