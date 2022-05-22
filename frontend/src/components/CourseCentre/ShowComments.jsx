import React from 'react';
import CommentCard from './CommentCard';


const ShowComments = (props)=>{
    if(props.comments == undefined){
        return(<></>)
    }
    return(
        <>
        {props.comments.map((item, index) =>
            <CommentCard 
                key = {index}
                comment = {item}
            />
        )}
        </>
        
    )
}

export default ShowComments;