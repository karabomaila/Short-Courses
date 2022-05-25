import React from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Slideshow = (props)=>{

    const onClick = ()=>{
        props.setOnDisplay(props.slide.content);
    }

    return(
        <div style = {{display: 'flex', marginLeft: 12}} onClick = {onClick}>
            <SlideshowIcon sx = {{color: '#daa520'}}/>
            {props.slide.name}
        </div>
        
    );
}

export default Slideshow;