import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMsal } from "@azure/msal-react";

function Profile(props) {
  const navigator = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { instance,accounts } = useMsal();
  console.log(accounts)
  const [namee,setNamee] = React.useState(null);
  React.useEffect(()=>{
    setNamee((s)=>{
      try{
        return accounts[0].name
      }
      catch(e){
        console.error(e);
        return '';
      }
  
    })

  },[setNamee]);
  

  const handleLogout = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: "/",
      mainWindowRedirectUri: "/",
    });
  };

  return (
    <>
      <div style={{cursor:'pointer',color:'white'}}>
        <h4 onClick={handleClick} style={{marginRight:'10px'}}>
            <FaUserCircle />{" " + namee}
        </h4>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => navigator("/MyPortfolio", {state: {acc: accounts}})}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
export default Profile;
