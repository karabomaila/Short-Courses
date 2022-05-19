import React from 'react';
import {useState} from 'react';
import Skills from './Skills';
import Books from './Books';
import Education from './Education';
import Work from './Work';

const PTestForm = (props)=>{

    const [skillVis, setSkillVis] = useState(false);
    const [bookVis, setBookVis] = useState(false);
    const [eduVis, setEduVis] = useState(false);
    const [workVis, setWorkVis] = useState(false);

   

    return(
        <div style = {MainStyle}>
            <p style = {{margin: 12, alignSelf: 'center'}}>Data belonging to {props.userID}</p>


            <h6 style = {H6Style}>Interests and Skills</h6>
            <Skills visible = {skillVis} 
            userID = {props.userID}
            setVisible = {setSkillVis}/>
            <h6 style = {H6Style}>Favourite Books Read</h6>
            <Books visible = {bookVis}
            userID = {props.userID}
            setVisible = {setBookVis}/>
            <h6 style = {H6Style}>Education</h6>
            <Education visible = {eduVis}
            userID = {props.userID}
            setVisible = {setEduVis}/>
            <h6 style = {H6Style}>Work</h6>
            <Work visible = {workVis}
            userID = {props.userID}
            setVisible = {setWorkVis}/>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
    marginTop: 22,
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