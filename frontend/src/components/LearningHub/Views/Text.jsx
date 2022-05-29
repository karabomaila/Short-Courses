import React from 'react';

const Text = (props)=>{
    return(
        <div data-testid = 'txt-div'>
             <p style = {{fontSize: props.size, margin: 0}}>{props.text}</p>
        </div>
    );
}

export default Text;