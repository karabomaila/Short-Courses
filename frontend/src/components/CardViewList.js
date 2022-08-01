import { useContext, useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardView from "./cardView";
import { Box, CircularProgress } from "@mui/material";
import React from "react";


function CardViewList({allCourses, setMessage, setOpenSnack}) {

  // keep buffering if the array of data is empty...
  return (
    <Container>
      {allCourses.length !== 0 ? (
        <Row>
          {allCourses.map((data, index) => (
            <Col key={index}>
              <CardView
                images = {data.images}
                name = {data.courseName}
                crs_id = {data.courseID}
                setMessage = {setMessage} 
                setOpenSnack = {setOpenSnack}
                data={data}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Box style={{ marginLeft: "48%", marginTop: "10%"}}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
export default CardViewList;
