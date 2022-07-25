import { Container, Row, Col } from "react-bootstrap";
import Course from "./EnrolledCourse";
import EnrolledCard from './CoursesUI/EnrolledCard';
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import {UserDataContext} from "./ContextAPI/UserDataContext";

function CourseList(props) {
  const {user} = useContext(UserDataContext);
  const [EnrolledData, setEnrolledData] = useState([]);


  useEffect(() => {
    console.log(user);
    var temp = { user_id: user.userID.split("@")[0] };
    axios
      .post("/enrolled", temp)
      .then((res) => {
        console.log(res.data);
        setEnrolledData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEnrolledData]);


  return (
    <div
      data-testid="course-list-div"
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: 55,
      }}
    >
      {EnrolledData.map((data, index) => (
        <EnrolledCard
          key={index}
          image1={data.picture_1}
          description={data.crs_description}
          name={data.crs_name}
          crs_id={data.crs_id}
          
        />
      ))}
    </div>
  );
}
export default CourseList;
