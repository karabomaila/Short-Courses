import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "./firebase-config";
import {
  getDownloadURL,
  ref,
  getStorage,
} from "@firebase/storage";
import { useState, useEffect } from "react";
import React from "react";
import {
  collection,
  getDocs,
  where,
  query,
} from "@firebase/firestore";

function Course(props) {
  
  const [imageURL, setImageURL] = useState("");
  const slidesCollectionRef = collection(db, "slides");
  const [ description,setDescription] = useState(props.description);

  const lindo = async () => {
    const q = query(slidesCollectionRef, where("courseID", "===", props.crs_id));
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

  const firebaseFunc = async ()=>{
    const storage = getStorage();
    if (props.image1 === null) {
      lindo();
    } else {
      await getDownloadURL(ref(storage, `Pictures/${props.image1}`)).then(
        (url) => {
          console.log(url);
          setDescription(props.description);
          setImageURL(url);
        }
      );
    }

  };


  useEffect( () => {
    firebaseFunc();
  }, [setImageURL]);

  const { state } = useLocation();

  const navigate = useNavigate();

  return (
    <Container>
      <>
        <Card className="d-flex my-2 mx-3 " style={{ background: "#b5aeb2" }}>
          <Card.Body className="d-flex">
            <img
              variant="bottom"
              src={imageURL}
              width="150px"
              height="150px"
              style={{
                maxHeight: "200px",
                minHeight: "200px",
                maxWeight: "100px",
                minWeight: "100px",
              }}
            />
            <Container>
              <Row>
                <Card.Text data-testid="name">{props.name}</Card.Text>
              </Row>
              <Row>
                <Card.Text data-testid="des">{description}</Card.Text>
              </Row>
              
            </Container>
          </Card.Body>
        </Card>
      </>
    </Container>
  );
}
export default Course;
