import { Card, Button, Carousel } from "react-bootstrap";
import GetInfo from "./AboutCourse/GetInfo";
import "./CardView.css";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import React from "react";
import { db } from "./firebase-config";
import AboutCourseDialog from "./AboutCourse/AboutCourseDialog";
import { collection, getDocs, where, query } from "@firebase/firestore";

function CardView(props) {
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [info, setInfo] = useState([]);
  const [dataObject, setDataObject] = useState({});
  const INFO_REF = collection(db, "slides");

  const onClickAboutDialog = () => {
    let getInfo = new GetInfo(info, props.crs_id);
    setDataObject(getInfo.PullData());
    setOpenAboutDialog(true);
  };

  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    console.log(props.images);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    if (isAuthenticated) {
      console.log(accounts[0].username.split("@")[0]);
      axios
        .post("http://localhost:5000/enroll", {
          user_id: accounts[0].username.split("@")[0],
          crs_id: props.crs_id,
        })
        .then((response) => {})
        .catch((error) => {});
    }
  };

  return (
    <div className="my-3 ">
      <Card style={{ width: "18rem" }}>
        {props.images.length > 0 ? (
          <Carousel variant="dark">
            {props.images.map((image, index) => (
              <Carousel.Item>
                <img
                  key={image.url}
                  style={{
                    maxHeight: "300px",
                    minHeight: "300px",
                    maxWeight: "200px",
                    minWeight: "200px",
                  }}
                  className="d-block w-100"
                  src={image.url}
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
          <Button variant="primary" onClick={handleClick}>
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
