import React from 'react';
import {useState} from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import {InputLabel, MenuItem, FormControl, Select, TextField }from '@mui/material';
import AddMenu from './AddMenu';

const PTestForm = (props)=>{

    const [value, setValue] = useState(new Date());
    const [gender, setGender] = useState('X');

    const handleChange = (event) => {
    setGender(event.target.value);
    };

    return(
        <div style = {MainStyle}>
            <p style = {{margin: 12, alignSelf: 'center'}}>Data belonging to {props.userID}</p>

            <h6 style = {H6Style}>Gender</h6>
            <div>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                    value={gender}
                    onChange={handleChange}
                    autoWidth
                    label="Gender"
                    >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'X'}>X</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <h6 style = {H6Style}>Birthday</h6>
           
            
            <h6 style = {H6Style}>Interests and Skills</h6>
            <AddMenu/>
            <h6 style = {H6Style}>Favourite Books Read</h6>
            <AddMenu/>
            <h6 style = {H6Style}>Education</h6>
            <AddMenu/>
            <h6 style = {H6Style}>Work</h6>
            <AddMenu/>
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