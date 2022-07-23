import React, { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import Button from "react-bootstrap/Button";
import { UserDataContext } from "../ContextAPI/UserDataContext";



/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
const SignInButton = (props) => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {});
  };

  return (
    
    <Button variant="outline-light" size="sm" style={{marginRight: '10px'}} onClick={handleLogin}>
      {" "}
      Sign in
    </Button>
  );
};

export default SignInButton;
