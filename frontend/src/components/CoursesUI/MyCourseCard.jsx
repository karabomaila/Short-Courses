import Actions from "./Actions"
import React from 'react';
import wits from './wits.png'
import ActionDel from "./ActionDel";
import { db } from "../firebase-config";
import {collection,addDoc,getDocs,where,query,updateDoc, doc,} from "@firebase/firestore";
import {getDownloadURL,ref,uploadBytesResumable,getStorage,} from "@firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const MyCourseCard = (props)=>{

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




    return(
        <div style = {MainStyle}>
            <div style = {ImageStyle}>
                <img src = {imageURL} width = '100%' height = '100%'/>
            </div>
            <div style = {TitleStyle}>{props.name}</div>
            <div style = {ActionStyle}>
                <Actions title = 'View' 
                name = {props.name}
                user = {props.user}
                crs_id = {props.crs_id}
                click = 'view'/>
                <Actions title = 'Edit' click = 'edit'/>
                <Actions title = 'Info' click = 'info'/>
                <ActionDel title = 'Del' click = 'del'/>
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '330px',
    minWidth: '330px',
    //background: 'blue',
    alignSelf: 'center',
    height: '410px',
    //minHeight: '50%'
    borderRadius: 9,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const ImageStyle = {
    display:'flex',
    height: '78%',
    padding: 4
    
}

const TitleStyle = {
    fontWeight: 'bold',
    margin: 5
}

const ActionStyle = {
    display: 'flex',
    justifyContent: 'center'

}

export default MyCourseCard;