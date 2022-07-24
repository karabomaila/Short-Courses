import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MyCoursesList from "./CoursesUI/MyCoursesList";
import EnrolledAppBar from "./EnrolledAppBar";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#d9c93b",
};

function MyCourses() {
  const navigate = useNavigate();

  // <EnrolledAppBar title="My Courses" modal={true} user={state.user} />

  const handleShow = () => {
    navigate("/CreateCourse");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EnrolledAppBar title="My Courses" modal={true} />
      <MyCoursesList />
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

export default MyCourses;
