import React from 'react';

const Image = (props)=>{
    return(
        <img src = {props.url} 
        alt ={"Image"} 
        width = {450} 
        style = {{margin: 20}}
        height = {450}/>
      
    );
}

export default Image;