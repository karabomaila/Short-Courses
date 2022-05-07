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

export default DisplayOutcomes;