import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from "react";

const ViewTag = (props)=>{

    const onDelete = () =>{
        // removing an element on props.i
        props.tagArray.splice(props.i, 1);
    }
    return(
        <div data-testid = 'view-tag-div' style = {TagStyle}>
            <div style = {DivStyle}>
            <p style = {{margin: 0, alignSelf: 'center', fontWeight: '600'}}>{props.tagName}</p>
            </div>
            <div style = {DivStyle}>
            <HighlightOffIcon data-testid = "view-tag-cl" sx = {{color: 'white', cursor: 'pointer'}} onClick = {onDelete}/>
            </div>
        </div>
    )
}

const TagStyle = {
    display: 'flex',
    background: '#007377',
    borderRadius: 15,
    padding: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
}

const DivStyle = {
    display: 'flex',
    marginLeft: 5,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
}

export default ViewTag;