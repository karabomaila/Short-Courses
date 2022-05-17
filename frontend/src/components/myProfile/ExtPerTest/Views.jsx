import React from "react";
import DisplayBooks from "./DisplayBooks";
import EducationView from "./EducationView";
import ViewSkills from "./ViewSkills";
import WorkView from "./WorkView";

const Views = (props)=>{

    if(props.type === 'skills'){
        return(
            <>
            {props.data.map((item, index) =>
            <ViewSkills 
                key = {index}
                skill = {item}
            />)}
            </>
        )
    }else if(props.type === 'books'){
        return(
            <>
            {props.data.map((item, index) =>
            <DisplayBooks
                key = {index}
                book = {item}
            />)}
            </>
        )
    }else if(props.type === 'edu'){
        return(
            <>
            {props.data.map((item, index) =>
            <EducationView
                key = {index}
                school = {item}
            />)}
            </>
        )
    }else if(props.type === 'work'){
        return(
            <>
            {props.data.map((item, index) =>
            <WorkView
                key = {index}
                work = {item}
            />)}
            </>
        )
    }
}

export default Views;