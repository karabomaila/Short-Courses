import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Firstpanel from "./Firstpanel";
import Main from "./studio/Main";
import { storage, db } from "./firebase-config";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { collection } from "@firebase/firestore";
import axios from "axios";
import { data } from "jquery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CreateCourse() {
  const [value, setValue] = React.useState(0);
  const [course, setCourse] = React.useState(null);
  

  React.useEffect(() => {
    const tabsStorage = window.sessionStorage.getItem("currTab");
    if (tabsStorage !== null) {
      setValue(parseInt(tabsStorage));
    } else {
      window.sessionStorage.setItem("currTab", "0");
    }
  }, []);

  
  const handletab = (event, num) => {
    setValue(num);
    window.sessionStorage.setItem("currTab", num.toString());
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel value={value} index={0}>
        <Firstpanel
          handletab={handletab}
          setCourse={setCourse}
          course={course}
          
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Main
          handletab={handletab}
          course={course}
          setCourse={setCourse}
          
        />
      </TabPanel>
    </Box>
  );
}
