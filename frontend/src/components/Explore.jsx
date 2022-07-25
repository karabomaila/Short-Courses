import React, { useEffect } from 'react';
import CardViewList from './CardViewList';
import axios from 'axios';
import Navigation from './navigation';
import { useState } from 'react';
// import UserDataContext from './ContextAPI/UserDataContext';

function Explore(props) {

  const [allCourses, setAllCourses] = useState([]);
  useEffect(()=>{
    getAllCourses();
  }, []);

  // fetch all courses from the backend...
  const getAllCourses = ()=>{
      axios.get("/getAllCourses")
      .then((response) => {setAllCourses(response.data)})
      .catch();
  }
  
  return ( 
    <div style = {styles.Main}>
        <Navigation user={props.user}/>
        <p style = {styles.Text}>EXPLORE</p>
        <CardViewList allCourses = {allCourses}/>
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