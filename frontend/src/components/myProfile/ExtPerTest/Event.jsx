import { Button } from "@mui/material";
import { db } from '../../firebase-config.jsx';
import {doc, setDoc} from 'firebase/firestore';
import React from "react";

const Event = (props) => {

    const updateTest = async (data) =>{
        let ref = doc(db, 'About', props.userID);
        setDoc(ref, {test: data}, {merge: true});
    }

    const data =(question, answer) =>{
        return({Q: question, A: answer});
    }

    const onClick = ()=>{
        if(props.click === 'main'){
            props.setModal('main');
        }else if(props.click === 'quiz'){
            props.setModal('quiz');
        }else if(props.click === 'view'){
            props.setModal('view');
        }else if(props.click === 'next'){
            let int = props.nextIndex + 1;
            if(int < props.len){
                props.setNextIndex(int);
            }else{
                props.setNextIndex(0);
                props.setModal('main');
            }

        }else if(props.click === 'yes' || props.click === 'nsure' || props.click === 'no'){
            let int = props.index + 1;
            let tempArray = props.answer;
            tempArray.push(data(props.question, props.click));
            props.setAnswer(tempArray);
            if(int < props.size){
                props.setIndex(int);
            }else{
                props.setIndex(0);
                updateTest(props.answer);
                props.setAnswer([]);
                props.setModal('main');
            }
        }
    }

    return(
        <Button variant="outlined" 
        data-testid={props.click}
        style={ButtonStyle}
        onClick = {onClick}>{props.title}
        </Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: '#daa520'
}


export default Event;