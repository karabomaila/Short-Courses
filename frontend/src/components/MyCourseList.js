import { Container, Row,Col } from 'react-bootstrap';
import MyCourseView from './MyCourseView';
import DataContext from './DataContext';
import {useContext,useEffect,useState} from 'react';
import axios from 'axios'
import React from "react";
function MyCourseList(props){
    // const dataMycourses=useContext(DataContext);
    const [MycoursesData,setMycoursesData] = useState([]);

    // axios
    //   .post("http://localhost:5000/mycourses",{user_id:"12345"})
    //   .then((res) => {
    //     // setUsers(res.data);
    //     console.log(res);
    //     if(res.data === "Login Sucessful"){
    //       //setLogin(true)
    // 
    //          }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(props.user)


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
         <Container style={{marginTop:'100px'}}>
         <Row>
          
          {MycoursesData.map((data,index) => 
          
            <Col key={index}>
            <MyCourseView
            key={index}
            image1={data.picture_1}
            description={data.crs_description} 
            name={data.crs_name}s
            crs_id={data.crs_id}
            user={props.user}
           /></Col>)}
          
         </Row>
         
         
          </Container>
     );
 }
 export default MyCourseList;