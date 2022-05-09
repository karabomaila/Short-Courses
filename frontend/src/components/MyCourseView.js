import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./profile";
import { Card, Carousel, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Course from "./Course";
import { Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "./firebase-config";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "@firebase/storage";
import React from "react";
import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} from "@firebase/firestore";

const user = {
  id: "1",
  email: "235528@students.wits.ac.za",
};

function MyCourseView(props) {
  const { state } = useLocation();
  console.log(props)
  const slidesCollectionRef = collection(db, "slides");
  const [description, setDescription] = useState(props.description);

  const navigate = useNavigate();

  var namee = props.name;

  const [imageURL, setImageURL] = useState("");

  const lindo = async () => {
    const q = query(slidesCollectionRef, where("courseID", "==", props.crs_id));
    const data = await getDocs(q);

    let tmp = data.docs[0]._document.data.value.mapValue.fields;
    setDescription(tmp.description.stringValue);

    let tmpImages = [];
    tmp.images.arrayValue.values.map((curr) => {
      tmpImages.push({
        id: curr.mapValue.fields.id.integerValue,
        url: curr.mapValue.fields.url.stringValue,
      });
    });
    setImageURL(tmpImages[0].url);
  };

  useEffect(async () => {
    const storage = getStorage();
    if (props.image1 === null) {
      lindo();
    } else {
      await getDownloadURL(ref(storage, `Pictures/${props.image1}`)).then(
        (url) => {
          //console.log(url)
          setImageURL(url);
        }
      );
    }
  }, [setImageURL]);

  return (
    <Container style={{position: 'relative',padding: '10px'}}>
      <>
        <Card className="d-flex my-2 mx-3 " style={{ background: "#b5aeb2" }}>
          <Card.Body className="d-flex">
            <div>
              <img
                variant="bottom"
                src={imageURL}
                width="150px"
                height="150px"
                style={{
                  maxHeight: "200px",
                  minHeight: "200px",
                  maxWidth: "100px",
                  minWidth: "100px",
                }}
              />

            </div>

            <Container>
              <Row>
                <Card.Text data-testid="name">{props.name}</Card.Text>
              </Row>
              <Row>
                <Card.Text data-testid="des">{description}</Card.Text>
              </Row>
              <div style={{display: "flex", flexDirection: "row",position:'absolute',bottom:"15px",right:"15px"}}>
                <Button
                  data-testid="viewBtn"
                  style={{marginRight:'5px'}}
                  variant="dark"
                  onClick={() => {
                    navigate(`/CreateCourse/${props.name}`, {
                      state: {
                        student: false,
                        user: props.user,
                        crs_id: props.crs_id,
                      },
                    });
                  }}
                >
                  VIEW
                </Button>

                <Button variant="dark" style={{marginRight:'5px'}} data-testid="editBtn">EDIT</Button>

                
              </div>
            </Container>
          </Card.Body>
        </Card>
      </>
    </Container>
  );
}
export default MyCourseView;
