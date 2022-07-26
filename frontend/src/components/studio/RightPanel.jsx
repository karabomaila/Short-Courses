import React from "react";
import { Typography, Tab, Tabs, Box } from "@mui/material";
import RightPanelAccordion from "./RightPanelAccordion";
import PropTypes from "prop-types";
import CourseContentTab from "./CourseContentTab";

const mainDiv = {
  position: "absolute",
  backgroundColor: "#f4fdff",
  left: "75%",
  right: "0px",
  bottom: "0px",
  top: "10%",
  resize: true,
  overflowY: "auto",
  textAlign: "center",
};

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
        <Box >
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function RightPanel(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={mainDiv}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Design" {...a11yProps(0)} sx={{width: '50%'}} />
            <Tab label="Content" {...a11yProps(1)} sx={{width: '50%'}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{p:3}}>
          <RightPanelAccordion
            canvasTools={props.canvasTools}
            setCanvasTools={props.setCanvasTools}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
         <CourseContentTab/>
        </TabPanel>
      </Box>
    </div>
  );
}

export default RightPanel;
