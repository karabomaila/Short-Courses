import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import TagsInput from './TagsInput';
import {db} from "../firebase-config";
import {useState, useEffect} from 'react';
import {doc, setDoc, collection, getDocs} from "firebase/firestore"; 
import Helpers from '../FirebaseAPIs/Helpers';
import {useNavigate} from 'react-router-dom';

/*
 * ONLY This file should be called on the studio
  after creating a course...
 * Pass in course code and name as props
 * Pass in the Open and close useState - as seen on the "useless.jsx"
 * No one should edit anything on these files 
 * By NO ONE I mean Lindokuhle...

*/
const TagsDialog = (props, {courseData, slideData}) => {
    const navigator = useNavigate();
    const [tags, setTags] = useState([]);
    const REF_COLLECTION = collection(db, "CourseTags");
    
    useEffect(() => {
        const getTags = async ()=>{
            const data = await getDocs(REF_COLLECTION);
            setTags(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getTags();
    }, [])

    
    let initArray = courseData.courseName.split(" ");
    let TagArray = new Array();

    for(let i = 0; i < initArray.length; i++){
        TagArray.push('#' + initArray[i]);
    }

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const onClose = () =>{
        props.close(false);
        let uploadTag = new Helpers();
        uploadTag.PushTag(tags, TagArray, courseData.courseID);
        // Lead back to homepage...
        navigator("/Studio++", {courseData: courseData, slideData: slideData});
    }

    return(
        <div>
        <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
            <DialogTitle>Add Tags</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Add few tags to your course to improve search appearance. e.g #ShortCourses, #DFMPC
            </DialogContentText>
                <TagsInput tagArray = {TagArray} />
                
            </DialogContent>
            <DialogActions>
                <Button variant = 'text' onClick={onClose}>Next</Button>
            </DialogActions>
      </Dialog>
        </div>
    )
}

export default TagsDialog;