import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EnrolledAppBar from "./EnrolledAppBar";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BasicLoader from "./Loaders/BasicLoader";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import MyCourseCard from "./CoursesUI/MyCourseCard";
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { UserDataContext } from "./ContextAPI/UserDataContext";
import { async } from "@firebase/util";

function MyCourses() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [courses, setCourses] = useState([]);

  const [loader, setLoader] = useState(false);
  const [basicLoader, setBasicLoader] = useState(true);
  const [courseDelID, setCourseDelID] = useState("");
  const [openDel, setOpenDel] = useState(false);

  useEffect(async () => {
    // return all the courses created by the user...
    const userStorage = window.sessionStorage.getItem("user");
    if (userStorage !== null) {
      setUser(JSON.parse(userStorage));
      await getCreatedCourses(JSON.parse(userStorage));
    } else {
      await getCreatedCourses(user);
    }
  }, []);

  const getCreatedCourses = async (user) => {
    axios
      .post("/getCreatedCourses", { userID: user.userID })
      .then((response) => {
        setBasicLoader(false);
        setCourses(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleShow = () => {
    navigate("/CreateCourse");
  };

  const onClose = () => {
    setOpenDel(false);
  };

  const onDelete = async () => {
    setLoader(true);
    console.log(courseDelID);
    axios
      .post("/deleteCourse", { courseID: courseDelID })
      .then((response) => {
        setLoader(false);
        setOpenDel(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <EnrolledAppBar title="My Courses" modal={true} />
      <div style={{ display: "flex", marginTop: "10%" }}>
        {courses.map((course, index) => (
          <MyCourseCard
            key={index}
            courseID={course.courseID}
            courseName={course.courseName}
            images={course.images}
            openDel={openDel}
            setCourseDelID={setCourseDelID}
            setOpenDel={setOpenDel}
            setLoader={setLoader}
            loader={loader}
          />
        ))}
      </div>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openDel}
        onClose={onClose}
      >
        <DialogContent>
          <p style={{ margin: 0, fontWeight: "300", fontSize: 22 }}>
            Delete Course
          </p>
        </DialogContent>
        <DialogContent></DialogContent>
        {!loader ? (
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="text" onClick={onDelete}>
              Delete
            </Button>
          </DialogActions>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 12,
            }}
          >
            <CircularProgress />
          </div>
        )}
      </Dialog>

      <Fab
        color="primary"
        aria-label="add"
        style={fabStyle}
        onClick={handleShow}
      >
        <AddIcon />
      </Fab>

      {basicLoader ? <BasicLoader /> : null}
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
