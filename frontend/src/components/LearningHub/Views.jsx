import React from 'react';
import Text from './Views/Text';
import Image from './Views/Image';
import Video from './Views/Video';

const Views = (props)=>{

    if(props.data.type == 'text'){
        return(<Text text = {props.data.content} size = {props.data.fontSize}/>);
    }else if(props.data.type === 'image'){
        return(<Image url = {props.data.url}/>);
    }else if (props.data.type === 'video'){
        return(<Video url = {props.data.url}/>);
    }else{
        // Unkown type...
        return(<>
            **** Unkown type ****
        </>);
    }
}

export default Views;