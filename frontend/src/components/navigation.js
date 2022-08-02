import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navigation.css";
import Profile from "./profile";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import SignInButton from "./SSO/SignInButton";
import { useState, useEffect } from "react";
import { UserDataContext } from "./ContextAPI/UserDataContext";
import axios from "axios";

function Navigation({search, setSearch, allCourses}) {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const { instance, accounts } = useMsal();

  const {setUser} = useContext(UserDataContext);


  const onMyCourses = ()=>{
    navigate("/MyCourses");
  }

  const onSearch = (event)=>{
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  useEffect(()=>{
    console.log(isAuthenticated);
    // Update the user data once the is signed in...
    // const temp = window.sessionStorage.getItem("user");
    // console.log(JSON.parse(temp.toString()));
    if(isAuthenticated){
      axios.post("/newUser", {userID: accounts[0].username}).then(res=>{}).then(err=>{});
      const obj = {
        userID: accounts[0].username,
        name: accounts[0].name
      }
      setUser(obj);
      window.sessionStorage.setItem("user",JSON.stringify(obj));
    }
      
  }, [isAuthenticated]);

  return (
    <Navbar expand="lg" variant="dark" style={{ background: "#007377" }}>
      <Container fluid>
        {isAuthenticated ? (<Profile name={name} /> ) : (<SignInButton setName={setName} />)}

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {isAuthenticated ? (
              <>
                <Button
                  data-testid="myCoursesBtn"
                  variant="outline-light"
                  style={{ marginRight: "15px" }}
                  size="sm"
                  onClick={onMyCourses}>My Courses</Button>

                <Button
                  data-testid="enrolledBtn"
                  variant="outline-light"
                  size="sm"
                  onClick={() => {navigate("/Enrolled");
                  }}>Enrolled</Button>

              </>
            ) : null}
          </Nav>
          <Form className="d-flex">
            <FormControl
              data-testid="searchText"
              type="search"
              placeholder="Search"
              value={search}
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
               onSearch(event);
              }}
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;