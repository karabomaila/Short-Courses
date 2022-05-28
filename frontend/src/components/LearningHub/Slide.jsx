import React from 'react';
import Views from './Views';


const Slide = (props)=>{

    // send only the array or slides to this page...
   
    const slides = {
        chapter: 1,
        content: 
        [
            {content: 'Richard', fontSize: 20, position:{type: 'text'}},
            {content: 'Computer Graphics and visiualisation', fontSize: 12, position:{type: 'text'}},
            {content: 'COMPUTER SCIENCE', fontSize: 22, position:{type: 'text'}},
            {position:{type: 'video', url: "https://www.youtube.com/embed/1xPu_a3WRSQ"}},
            {position:{type: 'image', url: "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4="}},
            
        ]
    };

    //const slidesArray = slides.content;
   
    return(
        <div style = {MainStyle}>
           {props.slidesArray.map((item, index) =>
                <Views 
                key = {index}
                 data = {item}
                />
           )}
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default Slide;