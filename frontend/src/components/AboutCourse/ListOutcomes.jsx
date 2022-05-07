import React from "react";
import DisplayOutcomes from './DisplayOutcomes';

const ListOutcomes = (props)=>{
    return(
        <div style= {ListStyle}>
                {props.array.map((item, index) => 
                <DisplayOutcomes 
                key = {index} 
                outcome = {item} 
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

export default ListOutcomes;