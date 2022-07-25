import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EnrolledAppBar from "./EnrolledAppBar";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCourseCard from "./CoursesUI/MyCourseCard";


function MyCourses() {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(async()=>{
    // return all the courses created by the user...
    getCreatedCourses();
  });

  const getCreatedCourses = async()=>{
    axios.post("/getCreatedCourses", {userID: user.userID})
    .then((response)=> {setCourses(response.data)})
    .catch((err)=> console.log(err));
  }

  const handleShow = () => {
    navigate("/CreateCourse");
  };

  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EnrolledAppBar title="My Courses" modal={true} />
      {courses.map((course, index)=>
        <MyCourseCard 
        key = {index}
        ourseID = {course.courseID}
        courseName = {course.courseName}
        images = {course.images}
        />
      )}

      <Fab
        color="primary"
        aria-label="add"
        style={fabStyle}
        onClick={handleShow}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#d9c93b",
};

export default MyCourses;
