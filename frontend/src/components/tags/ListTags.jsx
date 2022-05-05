import ViewTag from './ViewTag';
import React from "react";

const ListTags = (props)=>{
    return(
        <div style= {ListStyle}>
                {props.tagArray.map((item, index) => 
                <ViewTag 
                key = {index} 
                i = {index} 
                tagName = {item} 
                tagArray = {props.tagArray}
                />)}
        </div>
    )
}

const ListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'center'
}

export default ListTags;