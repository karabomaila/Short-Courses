import {render,screen,fireEvent} from '@testing-library/react';
import RightPanel from '../RightPanel';

const canvasTools = [
    {
        "_id": 1653148922038,
        "position": {
            "top": 80.00000762939453,
            "left": 66.27080190734864
        },
        "type": "text",
        "fontSize": 20,
        "width": 100,
        "height": 50
    },
    {
        "_id": 1653148925532,
        "position": {
            "top": 168.00000762939453,
            "left": 0
        },
        "type": "image",
        "url": "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
        "width": 300,
        "height": 200
    },
    {
        "_id": 1653148933393,
        "position": {
            "top": 100.00000762939453,
            "left": 517.6041435058594
        },
        "type": "text",
        "fontSize": 20,
        "width": 100,
        "height": 50
    }
]


describe('Accordions',()=>{
    it("Should show Properties", ()=>{
        render(<RightPanel canvasTools={canvasTools} setCanvasTools={()=>{}} />);
        const element = screen.getByTestId("firstAcc");
        expect(element).toBeInTheDocument();
    })
    it("Should show Components", ()=>{
        render(<RightPanel canvasTools={canvasTools} setCanvasTools={()=>{}} />);
        const element = screen.getByTestId("secondAcc");
        expect(element).toBeInTheDocument();
    })
    it("Should show Templetes", ()=>{
        render(<RightPanel canvasTools={canvasTools} setCanvasTools={()=>{}} />);
        const element = screen.getByTestId("thirdAcc");
        expect(element).toBeInTheDocument();
    })
})

describe('Components',()=>{
    it("Should show Properties", ()=>{
        render(<RightPanel canvasTools={canvasTools} setCanvasTools={()=>{}} />);
        const element = screen.getByTestId("firstAcc");
        expect(element).toBeInTheDocument();
    })
    
})