import { Card, Button, Carousel, Modal } from "react-bootstrap";
import "./CardView.css";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "@firebase/storage";
import { useState, useEffect } from "react";
import axios from "axios";

function CardView(props) {
  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");

  useEffect(async () => {
    const storage = getStorage();
    await getDownloadURL(ref(storage, `Pictures/${props.image1}`)).then(
      (url) => {
        // console.log(url)
        setImageURL1(url);
      }
    );
  }, [setImageURL1]);

  useEffect(async () => {
    const storage = getStorage();
    await getDownloadURL(ref(storage, `Pictures/${props.image2}`)).then(
      (url) => {
        // console.log(url)
        setImageURL2(url);
      }
    );
  }, [setImageURL2]);

  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("enroll", { user_id: props.user_id, crs_id: props.crs_id })
      .then((response) => {

      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="my-3 ">
      <Card style={{ width: "18rem" }}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageURL1}
              alt="First view"
              height="300"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageURL2}
              alt="Second view"
              height="300"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body className="justify-content-center">
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary" onClick={handleClick}>
            Enroll
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CardView;
