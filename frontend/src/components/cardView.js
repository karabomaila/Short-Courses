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
import { db } from './firebase-config.jsx';
import {collection, getDocs, doc, getDoc} from 'firebase/firestore';
import AboutCourseDialog from "./AboutCourse/AboutCourseDialog";
import GetInfo from './AboutCourse/GetInfo';

function CardView(props) {

  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [info, setInfo] = useState([]);
  const [dataObject, setDataObject] = useState({});
  const INFO_REF = collection(db, "slides");

  useEffect(() => {
    const getData = async ()=>{
        const data = await getDocs(INFO_REF);
        setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getData();
  }, [])

  const onClickAboutDialog = () =>{
    let getInfo = new GetInfo(info, props.crs_id);
    setDataObject(getInfo.PullData());
    setOpenAboutDialog(true);
  }


  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const isAuthenticated = useIsAuthenticated();

  const someFunc = ()=>{
    var x;
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          {setGraphData(response);
            x=response

          }
        );
      });

      return graphData.id
      
    }

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
    // someFunc()
    // console.log(graphData)

    if (isAuthenticated){
      console.log(accounts[0].username.split("@")[0])
      axios
      .post("enroll", { user_id: accounts[0].username.split("@")[0], crs_id: props.crs_id  })
      .then((response) => {

      })
      .catch((error) => {
        
      });
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
          <Button 
          variant = 'outlined' 
          style = {{marginLeft: 15, color: 'black'}}
          onClick = {onClickAboutDialog}>
          Course Info
          </Button>
        </Card.Body>
      </Card>

      <AboutCourseDialog 
      open = {openAboutDialog} 
      close = {setOpenAboutDialog} 
      courseName = {props.name}
      courseID = {props.crs_id} 
      data = {dataObject}/>
    </div>
  );
}
export default CardView;
