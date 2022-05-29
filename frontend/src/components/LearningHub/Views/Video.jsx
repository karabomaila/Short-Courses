import React from 'react';
import Iframe from 'react-iframe'

const Video = (props)=>{
    return(
        <div data-testid = 'vid-div'>
            <Iframe url= {props.url}
                width="600px"
                height="450px"
                id="video"
                display="initial"
                position="relative"
            />
        </div>
    );
}

export default Video;