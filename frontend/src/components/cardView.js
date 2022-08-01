import { Card, Button, Carousel } from "react-bootstrap";
import GetInfo from "./AboutCourse/GetInfo";
import "./CardView.css";
import "../App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import React from "react";
import { db } from "./firebase-config";
import AboutCourseDialog from "./AboutCourse/AboutCourseDialog";
import { UserDataContext } from "./ContextAPI/UserDataContext";
import { collection, getDocs, where, query } from "@firebase/firestore";

function CardView(props) {
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [info, setInfo] = useState([]);
  const [dataObject, setDataObject] = useState({});
  const INFO_REF = collection(db, "slides");

  const { user } = useContext(UserDataContext);

  const onClickAboutDialog = () => {
    
    setDataObject({
      description: props.data.description,
      outcomes: props.data.outcomes,
      duration: props.data.duration,
    });
    setOpenAboutDialog(true);
  };

  const isAuthenticated = useIsAuthenticated();

  
  const onEnroll = async (event) => {
    event.preventDefault();

    if (isAuthenticated) {
      axios
        .post("/enroll", { courseID: props.crs_id, userID: user.userID })
        .then((response) => {
          // give alert to user after clicking enroll...
          props.setMessage(response.data);
          props.setOpenSnack(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // give alert to log in...
      props.setMessage("Please log in");
      props.setOpenSnack(true);
    }
  };

  return (
    <div className="my-3 ">
      <Card style={{ width: "18rem" }}>
        {props.images.length > 0 ? (
          <Carousel variant="dark">
            {props.images.map((image, index) => (
              <Carousel.Item key={image}>
                <img
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
            <div className="circle">{props.name[0]}</div>
          </div>
        )}

        <Card.Body className="justify-content-center">
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary" onClick={onEnroll}>
            Enroll
          </Button>
          <Button
            variant="outlined"
            style={{ marginLeft: 15, color: "black" }}
            onClick={onClickAboutDialog}
          >
            Course Info
          </Button>
        </Card.Body>
      </Card>

      <AboutCourseDialog
        open={openAboutDialog}
        close={setOpenAboutDialog}
        courseName={props.name}
        courseID={props.crs_id}
        data={dataObject}
      />
    </div>
  );
}
export default CardView;
