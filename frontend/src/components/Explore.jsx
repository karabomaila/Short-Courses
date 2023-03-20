import React, { useEffect } from 'react';
import CardViewList from './CardViewList';
import axios from 'axios';
import Navigation from './navigation';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
// import UserDataContext from './ContextAPI/UserDataContext';

function Explore(props) {

  // search values
  const [search, setSearch] = useState("");

  // Vars for the snack bar...
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");

  const [allCourses, setAllCourses] = useState([]);
  useEffect(()=>{
    getAllCourses();
  }, []);

  // fetch all courses from the backend...
  const getAllCourses = ()=>{
    //   axios.get("/getAllCourses")
    //   .then((response) => {setAllCourses(response.data)})
    //   .catch();
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };
  
  return ( 
    <div style = {styles.Main}>
        <Navigation search = {search} setSearch = {setSearch} allCourses = {allCourses}/>
        <p style = {styles.Text}>EXPLORE</p>
        <CardViewList allCourses = {allCourses} setMessage = {setMessage} setOpenSnack = {setOpenSnack}/>

        <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
    );
}

const styles = {
Main:{
display: 'flex',
flexDirection: 'column'

},
Text:{
    fontWeight: '400',
    fontSize: 22,
    marginLeft: 12,
    color: 'gray'
}
}

  

export default Explore;