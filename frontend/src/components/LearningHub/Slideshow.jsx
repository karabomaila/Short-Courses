import React from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Slideshow = (props)=>{

    const onClick = ()=>{
        props.setOnDisplay(props.slide.content);
    }

    return(
        <div style = {{display: 'flex', marginLeft: 12}} onClick = {onClick} data-testid = "slideshow-div">
            <SlideshowIcon sx = {{color: '#daa520'}} data-testid = "slideshow-icon"/>
            {props.slide.name}
        </div>
        
    );
}

export default Slideshow;