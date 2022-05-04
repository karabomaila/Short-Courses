import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from 'react-bootstrap';
import Dropdown from "react-bootstrap/esm/Dropdown";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/Home",
                mainWindowRedirectUri: "/Home"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }
    
    return (
        <Button variant="secondary" className="ml-auto" drop="left" title="Sign Out" onClick={() => handleLogout("popup")} ></Button>
            
    )
}