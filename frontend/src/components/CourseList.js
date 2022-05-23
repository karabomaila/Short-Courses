import { Container, Row, Col } from "react-bootstrap";
import Course from "./EnrolledCourse";
import DataContext from "./DataContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";



function CourseList(props) {
  // const data=useContext(DataContext);
  const [EnrolledData, setEnrolledData] = useState([]);

  useEffect(() => {
    
    var temp = { user_id: props.user[0].username.split("@")[0] };


    axios
      .post("http://localhost:5000/enrolled", temp)
      .then((res) => {
        console.log(res.data);
        setEnrolledData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEnrolledData]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        {console.log(EnrolledData)}
        {EnrolledData.map((data, index) => (
          <Col>
            <Course
              key={index}
              image1={data.picture_1}
              description={data.crs_description}
              name={data.crs_name}
              crs_id={data.crs_id}
              user={props.user}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default CourseList;
