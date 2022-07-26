import React, { useState, useReducer, useEffect } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";
import studioContext from "./StudioContext";
import Fab from "@mui/material/Fab";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SaveIcon from "@mui/icons-material/Save";
import renderTools from "./renderTools";
import TagsDialog from "../tags/TagsDialog";

const mainDiv = {
  display: "flex",
  flexDirection: "row",
  height: "100%",
};

function Main(props) {
  const onNext = () => {
    alert("Must show the tags");
  };

  const saveSlide = () => {
    if (edit === null) {
      // we're creating a new slide

      let tmpSlide = {
        id: slides.length,
        chapter: currentChapter,
        name: document.getElementById("slideName").value,
        content: canvasTools,
      };

      setSlides([...slides, tmpSlide]);
      setCanvasTools([]);
      renderTools([]);
    } else {
      console.log(edit);

      let TmpNewSlides = [];

      slides.map((item, index) => {
        if (index === edit.slide) {
          TmpNewSlides.push({ ...item, content: canvasTools });
        } else {
          TmpNewSlides.push(item);
        }
      });

      setSlides(TmpNewSlides);

      setEdit(null);
      setCanvasTools([]);
      renderTools([]);
    }
  };

  const onSave = () => {
    
    if (chapters.length === 0) {
      setDisplayAlert(true);
    } else {
      if (edit === null) {
        setOpen4(true);
      } else {
        saveSlide();
      }
    }
  };
  const [canvasTools, setCanvasTools] = useState([]);
  const [active, setActive] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [slides, setSlides] = useState([]);
  const [open2, setOpen2] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [currentChapter, setCurrentChapter] = React.useState(0);
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [edit, setEdit] = React.useState(null);

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
          setOpen2,
          saveSlide,
          currentChapter,
          setCurrentChapter,
          edit,
          setEdit,
          displayAlert,
          setDisplayAlert,
          open4,
          setOpen4
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
  top: "auto",
  right: 20,
  bottom: 85,
  left: "auto",
  position: "fixed",
  backgroundColor: "white",
};

const FabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "white",
};

export default Main;
