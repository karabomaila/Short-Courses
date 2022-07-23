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
            {props.tagName}
            </div>
            <div style = {DivStyle}>
            <HighlightOffIcon data-testid = "view-tag-cl" sx = {{color: 'orange', cursor: 'pointer'}} onClick = {onDelete}/>
            </div>
        </div>
    )
}

const TagStyle = {
    display: 'flex',
    background: 'green',
    width: 'fit-content',
    borderRadius: 10,
    margin: 12
    //height: 'fit-content'
}

const DivStyle = {
    marginLeft: 5,
    paddingTop: 5,
    color: 'white'
}

export default ViewTag;