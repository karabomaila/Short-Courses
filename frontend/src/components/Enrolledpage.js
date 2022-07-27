import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "./ContextAPI/UserDataContext";
import EnrolledCard from './CoursesUI/EnrolledCard';
import EnrolledAppBar from "./EnrolledAppBar";


function Enrolled(){

    const {user} = useContext(UserDataContext);
    const [courses, setCourses] = useState([]);

    useEffect(async()=>{
        // return the courses a user is enrolled...
        getEnrolledCourses();
    }, []);

    const getEnrolledCourses = async ()=>{
        console.log(user);
        axios.post("/getEnrolledCourses", {userID: user.userID})
        .then((response)=> {setCourses(response.data)})
        .catch((err)=>{console.log(err)});
    }

    return(
        <>
        <EnrolledAppBar title={"Enrolled"}/>
        <div style = {{display: 'flex', marginTop: '10%'}}>
        {courses.map((course, index) =>
            <EnrolledCard 
            key = {index}
            courseID = {course.courseID}
            courseName = {course.courseName}
            images = {course.images}
            />
        )}
        </div>
        </>
    )
    
}
export default Enrolled;

