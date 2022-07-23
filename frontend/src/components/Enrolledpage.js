import React from "react";
import CourseList from "./CourseList";
import EnrolledAppBar from "./EnrolledAppBar";


function Enrolled(){

    return(
        <>
        <EnrolledAppBar title={"Enrolled"}/>
        
        <div style = {{display: 'flex', margin: 20}}>
        <CourseList/> 
        </div>
        

        </>
    )
    
}
export default Enrolled;

