import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import React from 'react'

export const tools = [
    {
        id:1,
        name:"Text",
        className: "text",
        draggable:'draggable1',
        icon:<TitleIcon style={{color:'#464747'}}/>
    },
    {
        id:2,
        name:"Image",
        className: "image",
        draggable:'draggable2',
        icon:<ImageIcon style={{color:'#464747'}}/>
    },
    {
        id:3,
        name:"Video",
        className: "video",
        draggable:'draggable3',
        icon:<VideoCameraBackIcon style={{color:'#464747'}}/>
    }
]