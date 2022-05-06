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
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../graph";
import { loginRequest } from "../authConfig";
import React from "react";
import AboutCourseDialog from "./AboutCourse/AboutCourseDialog";

function CardView(props) {

  const [openAboutDialog, setOpenAboutDialog] = useState(false);

  const onClickAboutDialog = () =>{
    setOpenAboutDialog(true);
  }


  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const isAuthenticated = useIsAuthenticated();
  const slidesCollectionRef = collection(db, "slides");

  const lindo = async () => {
    const q = query(slidesCollectionRef, where("courseID", "==", props.crs_id));
    const data = await getDocs(q);

    let tmp = data.docs[0]._document.data.value.mapValue.fields;
    // setDescription(tmp.description.stringValue);

    let tmpImages = [];
    tmp.images.arrayValue.values.map((curr) => {
      tmpImages.push({
        id: curr.mapValue.fields.id.integerValue,
        url: curr.mapValue.fields.url.stringValue,
      });
    });
    setImageURL1(tmpImages[0].url);
    setImageURL2(tmpImages[0].url);
  };

  const someFunc = () => {
    var x;
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          setGraphData(response);
          x = response;
        });
      });

    return graphData.id;
  };

  useEffect(async () => {
    if (props.image1 === null) {
      lindo();
    } else {
      const storage = getStorage();
      await getDownloadURL(ref(storage, `Pictures/${props.image1}`)).then(
        (url) => {
          // console.log(url)
          setImageURL1(url);
        }
      );
    }
  }, [setImageURL1]);

  useEffect(async () => {
    if (props.image2 === null) {
      lindo();
    } else {
      const storage = getStorage();
      await getDownloadURL(ref(storage, `Pictures/${props.image2}`)).then(
        (url) => {
          // console.log(url)
          setImageURL2(url);
        }
      );
    }
  }, [setImageURL1]);

  
  const handleClick = (event) => {
    event.preventDefault();
    // someFunc()
    // console.log(graphData)

    if (isAuthenticated) {
      console.log(accounts[0].username.split("@")[0]);
      axios
        .post("enroll", {
          user_id: accounts[0].username.split("@")[0],
          crs_id: props.crs_id,
        })
        .then((response) => {})
        .catch((error) => {});
    } else {
      alert("Please login with you wits account");
    }
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
              
              style={{maxHeight:"300px",minHeight:"300px",maxWeight:"200px",minWeight:"200px"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{maxHeight:"300px",minHeight:"300px",maxWeight:"200px",minWeight:"200px"}}
              className="d-block w-100"
              src={imageURL2}
              alt="Second view"
              
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body className="justify-content-center">
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary" onClick={handleClick}>
            Enroll
          </Button>
          <Button 
          variant = 'outlined' 
          style = {{marginLeft: 15, color: 'black'}}
          onClick = {onClickAboutDialog}>
          Course Info
          </Button>
        </Card.Body>
      </Card>

      <AboutCourseDialog open = {openAboutDialog} close = {setOpenAboutDialog} />
    </div>
  );
}
export default CardView;
