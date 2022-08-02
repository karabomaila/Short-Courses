import React from 'react';
import {useState} from 'react';
import Skills from './Skills';
import Books from './Books';
import Education from './Education';
import Work from './Work';
import {db} from '../../firebase-config';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import { useEffect } from 'react';

const PTestForm = (props)=>{

    const [skillVis, setSkillVis] = useState(false);
    const [bookVis, setBookVis] = useState(false);
    const [eduVis, setEduVis] = useState(false);
    const [workVis, setWorkVis] = useState(false);

    const [skills, setSkills] = useState([]);
    const [books, setBooks] = useState([]);
    const [education, setEducation] = useState([]);
    const [work, setWork] = useState([]);


    return(
        <div data-testid = 'p-test-div' style = {MainStyle}>
            <p style = {{margin: 12, alignSelf: 'center'}} data-testid = 'ptest-data'>Data belonging to {props.userID}</p>


            <h6 style = {H6Style} data-testid = 'ptest-txt1'>Interests and Skills</h6>
            <Skills visible = {skillVis} 
            userID = {props.userID}
            data = {skills}
            setVisible = {setSkillVis}/>
            <h6 style = {H6Style}  data-testid = 'ptest-txt2'>Favourite Books Read</h6>
            <Books visible = {bookVis}
            userID = {props.userID}
            data = {books}
            setVisible = {setBookVis}/>
            <h6 style = {H6Style}  data-testid = 'ptest-txt3'>Education</h6>
            <Education visible = {eduVis}
            userID = {props.userID}
            data = {education}
            setVisible = {setEduVis}/>
            <h6 style = {H6Style}  data-testid = 'ptest-txt4'>Work</h6>
            <Work visible = {workVis}
            userID = {props.userID}
            data = {work}
            setVisible = {setWorkVis}/>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
    marginTop: 22,
    marginBottom: 22,
    width: '90%',
    minWidth: '90%',
    borderRadius: 9,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const H6Style = {
    fontWeight: 'bold',
    marginLeft: 15
}

export default PTestForm;