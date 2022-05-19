import React from 'react';
import {useState} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { CalendarPicker } from '@mui/x-date-pickers';
import {InputLabel, MenuItem, FormControl, Select, TextField }from '@mui/material';
import AddMenu from './AddMenu';
import Skills from './Skills';
import Books from './Books';
import Education from './Education';
import Work from './Work';

const PTestForm = (props)=>{

    const [skillVis, setSkillVis] = useState(false);
    const [bookVis, setBookVis] = useState(false);
    const [eduVis, setEduVis] = useState(false);
    const [workVis, setWorkVis] = useState(false);
    const [value, setValue] = useState(new Date());
    const [gender, setGender] = useState('X');

    const handleChange = (event) => {
    setGender(event.target.value);
    };

    return(
        <div style = {MainStyle}>
            <p style = {{margin: 12, alignSelf: 'center'}}>Data belonging to {props.userID}</p>


            <h6 style = {H6Style}>Interests and Skills</h6>
            <Skills visible = {skillVis} 
            setVisible = {setSkillVis}/>
            <h6 style = {H6Style}>Favourite Books Read</h6>
            <Books visible = {bookVis}
            setVisible = {setBookVis}/>
            <h6 style = {H6Style}>Education</h6>
            <Education visible = {eduVis}
            setVisible = {setEduVis}/>
            <h6 style = {H6Style}>Work</h6>
            <Work visible = {workVis}
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