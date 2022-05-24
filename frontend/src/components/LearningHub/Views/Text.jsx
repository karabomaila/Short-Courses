import React from 'react';

const Text = (props)=>{
    return(
        <p style = {{fontSize: props.size, margin: 0}}>{props.text}</p>
    );
}

export default Text;