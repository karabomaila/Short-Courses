import Actions from "./Actions";
import React from "react";
import ActionDel from "./ActionDel";
import { Carousel } from "react-bootstrap";
import "../../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import AboutCourseDialog from "../AboutCourse/AboutCourseDialog";
import { useState, useEffect } from "react";

const MyCourseCard = ({
  courseName,
  courseID,
  images,
  openDel,
  setOpenDel,
  setCourseDelID,
}) => {
  return (
    <div style={MainStyle} data-testid="my-ui-div">
      <div style={ImageStyle}>
        {images.length > 0 ? (
          <Carousel variant="dark">
            {images.map((image, index) => (
              <Carousel.Item>
                <img
                  key={image}
                  style={{
                    maxHeight: "300px",
                    minHeight: "300px",
                    maxWeight: "200px",
                    minWeight: "200px",
                  }}
                  className="d-block w-100"
                  src={image}
                  alt="Second view"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div
            style={{
              maxHeight: "300px",
              minHeight: "300px",
              maxWeight: "200px",
              minWeight: "200px",
            }}
          >
            <div className="circle">{courseName[0]}</div>
          </div>
        )}
      </div>

      <div style={TitleStyle}>{courseName}</div>
      <div style={ActionStyle}>
        <Actions title="View" name={courseName} click="view" />
        <Actions title="Edit" click="edit" />

        <ActionDel
          openDel={openDel}
          setCourseDelID={setCourseDelID}
          courseID={courseID}
          setOpenDel={setOpenDel}
          title="Del"
          click="del"
        />
      </div>
    </div>
  );
};

const MainStyle = {
  display: "flex",
  flexDirection: "column",
  width: "330px",
  minWidth: "330px",
  //background: 'blue',
  alignSelf: "center",
  height: "410px",
  marginTop: 18,
  //minHeight: '50%'
  borderRadius: 9,
  boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.5)",
};

const ImageStyle = {
  display: "flex",
  height: "78%",
  padding: 4,
};

const TitleStyle = {
  fontWeight: "bold",
  margin: 5,
};

const ActionStyle = {
  display: "flex",
  justifyContent: "center",
};

export default MyCourseCard;
