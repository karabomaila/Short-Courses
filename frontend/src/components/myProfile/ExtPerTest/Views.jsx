import React from "react";
import DisplayBooks from "./DisplayBooks";
import EducationView from "./EducationView";
import ViewSkills from "./ViewSkills";
import WorkView from "./WorkView";

const Views = (props)=>{
    if(props.type === 'skills'){
        if(props.data == undefined){
            return(<></>);
        }
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
            if(props.data == undefined){
                return(<></>);
            }

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
        if(props.data == undefined){
            return(<></>);
        }
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
        if(props.data == undefined){
            return(<></>);
        }
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