import React from 'react';
import { useState } from 'react';

const ProfileLoader = ()=>{

    //const [visible, setVisible] = useState(true);

    return(
        <div style = {MainStyle}>
            <h1>Hello</h1>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    height: '100vh',
    background: 'orange',
    width: '100%'
}

export default ProfileLoader;