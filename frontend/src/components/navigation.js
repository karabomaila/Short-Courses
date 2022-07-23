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
import DataContext from "./DataContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import SignInButton from "./SSO/SignInButton";
import { useState, useEffect } from "react";
import { UserDataContext } from "./ContextAPI/UserDataContext";

function Navigation(props) {
  const isAuthenticated = useIsAuthenticated();
  const dataNav = useContext(DataContext);
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const { instance, accounts } = useMsal();

  const {user, setUser} = useContext(UserDataContext);

  const onMyCourses = ()=>{
    navigate("/MyCourses", { state: { user: accounts } });
  }

  useEffect(()=>{
    if(isAuthenticated){
      const obj = {
        userID: accounts[0].username,
        name: accounts[0].name
      }
      setUser(obj);
    }
      
  }, [user, setUser]);

  return (
    <Navbar expand="lg" variant="dark" style={{ background: "#007377" }}>
      <Container fluid>
        {isAuthenticated ? (<Profile name={name} /> ) : (<SignInButton setName={setName} />)}

        {/* <Navbar.Brand href="#"><Profile name={props.user.first_name}/></Navbar.Brand> */}
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
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                dataNav.getValue(event.target.value);
              }}
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;