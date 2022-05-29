import React from 'react';
import Views from './Views';

const Slide = (props)=>{
    // send only the array or slides to this page...
    return(
        <div style = {MainStyle} data-testid = 'slide-div'>
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