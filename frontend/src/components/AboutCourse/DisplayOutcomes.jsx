import React from "react";

const DisplayOutcomes = (props)=>{
    return(
        <div style = {TagStyle}>
            <div style = {DivStyle}>
            {props.outcome}
            </div>
            <div style = {DivStyle}>
            </div>
        </div>
    )
}

const TagStyle = {
    display: 'flex',
    width: 'fit-content',
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#003b5c',
    margin: 12
}

const DivStyle = {
    margin: 2,
    color: '#003b5c'
}

export default DisplayOutcomes;