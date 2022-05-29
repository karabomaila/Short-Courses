import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Image from "../Image";
import Text from "../Text";
import Video from "../Video";
import Views from '../../Views';


describe('Text Test', ()=>{

    test('Test', ()=>{
        const {getByTestId} = render(<Text />);
        const d = getByTestId('txt-div');
        expect(d).toBeTruthy();
    })
})

describe('Image Test', ()=>{

     test('Test', ()=>{
        const {getByTestId} = render(<Image />);
        const d = getByTestId('img-div');
        expect(d).toBeTruthy();
    })
})

describe('Video', ()=>{

     test('Test', ()=>{
        const {getByTestId} = render(<Video />);
        const d = getByTestId('vid-div');
        expect(d).toBeTruthy();
    })
})


describe('Views TEST', ()=>{

    test('Test Text', ()=>{
        const data = {type: 'text'}
        const {getByTestId} = render(<Views data = {data} />);
   })

   test('Test Image', ()=>{
        const data = {type: 'image'}
        const {getByTestId} = render(<Views data = {data} />);
    })

    test('Test Video', ()=>{
        const data = {type: 'video'}
        const {getByTestId} = render(<Views data = {data} />);
    })

    test('Test Unknown', ()=>{
        const data = {type: 'gif'}
       const {getByTestId} = render(<Views data = {data} />);
   })

})



