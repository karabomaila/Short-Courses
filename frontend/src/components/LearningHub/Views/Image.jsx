import React from 'react';

const Image = (props)=>{
    return(
        <div data-testid = 'img-div'>
              <img src = {props.url} 
                alt ={"Image"} 
                width = {450} 
                style = {{margin: 20}}
                height = {450}/>
        </div>
    );
}

export default Image;