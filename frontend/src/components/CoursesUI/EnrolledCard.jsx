import Actions from "./Actions"
import React from 'react';
import {db} from '../firebase-config';
import {collection, where, query, getDocs} from 'firebase/firestore';
import { useState, useEffect } from "react";
import {getDownloadURL,ref,getStorage} from "@firebase/storage";


const EnrolledCard = (props)=>{
    const [dataObject, setDataObject] = useState({});
    const INFO_REF = collection(db, "slides");
    const slidesCollectionRef = collection(db, "slides");
    const [imageURL, setImageURL] = useState("");

    const lindo = async () => {
      const q = query(slidesCollectionRef, where("courseID", "==", props.crs_id));
      const data = await getDocs(q);
  
      let tmp = data.docs[0]._document.data.value.mapValue.fields;
      //setDescription(tmp.description.stringValue);
  
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


    return(
        <div style = {MainStyle} data-testid = "en-ui-div">
            <div style = {ImageStyle}>
                <img src = {imageURL} alt = {'Course Image'}width = '100%' height = '100%'/>
            </div>
            <div style = {TitleStyle}>{props.name}</div>
            <div style = {ActionStyle}>
                <Actions title = 'Learn' 
                click = 'learn' 
                courseID = {props.crs_id} 
                userID = {props.user}
                courseName = {props.name}/>
                <Actions title = 'Info'/>
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '330px',
    minWidth: '330px',
    alignSelf: 'center',
    height: '410px',
    borderRadius: 9,
    marginLeft: 20,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const ImageStyle = {
    display:'flex',
    height: '78%',
    padding: 4
    //background: 'red'
}

const TitleStyle = {
    fontWeight: 'bold',
    margin: 5
}

const ActionStyle = {
    display: 'flex',
    justifyContent: 'center'

}

export default EnrolledCard;