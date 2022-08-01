import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "./ContextAPI/UserDataContext";
import EnrolledCard from './CoursesUI/EnrolledCard';
import EnrolledAppBar from "./EnrolledAppBar";
import BasicLoader from "./Loaders/BasicLoader";

function Enrolled(){

    const {user} = useContext(UserDataContext);
    const [courses, setCourses] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(async()=>{
        // return the courses a user is enrolled...
        getEnrolledCourses();
    }, []);

    const getEnrolledCourses = async ()=>{
        console.log(user);
        axios.post("/getEnrolledCourses", {userID: user.userID})
        .then((response)=> {
            setLoader(false);
            setCourses(response.data);
        })
        .catch((err)=>{console.log(err)});
    }

    return(
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
        {loader ? <BasicLoader /> : null}
        </div>
    )
    
}
export default Enrolled;

