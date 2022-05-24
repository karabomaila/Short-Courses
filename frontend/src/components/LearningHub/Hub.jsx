import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ViewHub from './ViewHub';

const Hub = ()=>{

    const [view, setView] = useState(false);

    const onClick = ()=>{
        setView(true);
    }

    if(view){
        // pass in props for the chapter wanna view... 
        return(<ViewHub/>);
    }

    return(
        <div>
            Learning Hub
            <Button onClick = {onClick}>View</Button>

        </div>
    );
}

export default Hub;