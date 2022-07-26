import { Button } from "@mui/material";
import React, { useState, useReducer, useEffect } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";
import studioContext from "./StudioContext";
import Fab from '@mui/material/Fab';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SaveIcon from '@mui/icons-material/Save';
import TagsDialog from "../tags/TagsDialog";

const mainDiv = {
  display: "flex",
  flexDirection: "row",
  height: "100%",
};

function Main(props) {

  const [open, setOpen] = useState(false);

  const onNext = ()=>{
    // call the tags pop up...
    setOpen(true);
  }
  
  const onSave = ()=>{
    alert('Must show pop up to save current slide');
  }
  const [canvasTools, setCanvasTools] = useState([]);
  const [active, setActive] = useState(null);
  const [chapters, setChapters] =useState([]);
  const [slides, setSlides] = useState([]);
  const [open2, setOpen2] = React.useState(true);
  const [canvasTools2, despatch] = useReducer((state, action) => {
    // setCanvasTools2(action.payload);
    return action.payload;
  }, []);

  return (
    <div style={mainDiv}>
      <studioContext.Provider
        value={{
          canvasTools,
          setCanvasTools,
          slides,
          setSlides,
          chapters,
          setChapters,
          open2,
          setOpen2
        }}
      >
        <Leftpanel
          canvasTools={canvasTools}
          despatch={despatch}
          setCanvasTools={setCanvasTools}
          course={props.course}
          user={props.user}
        />
        <RightPanel
          canvasTools={canvasTools}
          setCanvasTools={setCanvasTools}
          course={props.course}
        />

        <Fab data-testid = 'fab-save-slide' variant="extended" style = {NFabStyle} onClick = {onSave}>
                      <SaveIcon sx={{ mr: 1, color: '#007377'}} />
                      Save Slide
          </Fab>

          <Fab data-testid = 'fab-next' variant="extended" style = {FabStyle} onClick = {onNext}>
                  <DoubleArrowIcon sx={{ mr: 1, color: '#007377'}} />
                  Next Step
          </Fab>
          <TagsDialog open = {open} close = {setOpen} courseName = {'Course Name'} courseID = {props.course.courseID}/>
      </studioContext.Provider>
      
    </div>
  );

}


const NFabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 85,
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'white'
};

const FabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'white'
};

export default Main;
