import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Profile from './profile';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import CardViewList from './CardViewList';
import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";

function CourseNav(props) {
  const [show, setShow] = useState(false);
  

  const navigate = useNavigate();


  
  return (

    <Navbar expand="lg" variant="dark" className="my-0 flex" style={{ background: '#007377' }}>

      <Profile />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Button
            data-testid="homeBtn"
            variant="outline-light"
            size="sm"
            style={{ marginRight: '10px' }}
            onClick={() => navigate('/')}>Home</Button>
          <Button
            data-testid="enrolledBtn"
            variant="outline-light"
            size="sm" style={{ marginRight: '10px' }}
            onClick={() => navigate('/Enrolled')}>Enrolled</Button>
          <Button
            data-testid="myCoursesBtn"
            variant="outline-light"
            size="sm"
            onClick={() => navigate('/MyCourses')}>MyCourses</Button>


        </Nav>

      </Navbar.Collapse>

    </Navbar>



  );
}
export default CourseNav;