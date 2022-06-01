import React from 'react';
import MyCourseCard from './MyCourseCard';
import {useContext,useEffect,useState} from 'react';
import axios from 'axios'
import { FaColumns } from 'react-icons/fa';

const MyCoursesList = (props)=>{

    const [MycoursesData,setMycoursesData] = useState([]);

    useEffect( async()=>{

        var temp={"user_id":props.user[0].username.split("@")[0]}
        
      
        await axios.post('http://localhost:5000/mycourses',temp)
          .then((res)=>{
            console.log(res.data);
            setMycoursesData(res.data)
  
          }).catch(err=>{
            console.log(err)
          })
          
       },[setMycoursesData])
  

    return(
        <div style = {MainStyle}>
            {MycoursesData.map((data,index) => 
          <MyCourseCard
          key={index}
          image1={data.picture_1}
          description={data.crs_description} 
          name={data.crs_name}
          crs_id={data.crs_id}
          user={props.user}
         />)}
        </div>
    )
}

const MainStyle ={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: 90
}

export default MyCoursesList;