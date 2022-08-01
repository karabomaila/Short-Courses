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
  // window.onbeforeunload = function () {
  //   return 'Are you really want to perform the action?';
  //  }

  const [open, setOpen] = useState(false);
  const [canvasTools, setCanvasTools] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [slides, setSlides] = useState([]);
  const [open2, setOpen2] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [currentChapter, setCurrentChapter] = React.useState(0);
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [edit, setEdit] = React.useState(null);
  const [currSlideMins, setCurrSlideMins] = React.useState(2);
  const [outcomes, setOutcomes] = React.useState([]); //Learning outcomes of the current chapter
  const [slideData, setSlideData] = React.useState(null);
  const [courseData, setCourseData] = React.useState(null);


  const onNext = () => {
    console.log(props.course);
    console.log(slides);
    console.log(chapters);

    let temp = []
    let duration = 0;
    let outcomes = [];

    // let tempSlides = [];

    chapters.map((chapter, index)=>{

      const tempSlides = slides.filter((item)=>item.chapter===chapter.id);

      tempSlides.map(item=>{
        duration+=item.duration;
      })

      outcomes.push(...chapter.outcomes)



      // slides
      temp.push({...chapter,slides:tempSlides});

      // slides.filter

    })

    const userID = JSON.parse(window.sessionStorage.getItem("user")).userID;


    const slideData = {content:temp,courseID:props.course.courseID,courseName:props.course.name};
    const courseData = {...props.course,duration,userID};

    setSlideData(slideData);
    setCourseData(courseData);
    

    

    



    setOpen(true);
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
          setOpen4,
          currSlideMins,
          setCurrSlideMins,
          outcomes,
          setOutcomes
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

        <Fab
          data-testid="fab-save-slide"
          variant="extended"
          style={NFabStyle}
          onClick={onSave}
        >
          <SaveIcon sx={{ mr: 1, color: "#007377" }} />
          Save Slide
        </Fab>

        <Fab
          data-testid="fab-next"
          variant="extended"
          style={FabStyle}
          onClick={onNext}
        >
          <DoubleArrowIcon sx={{ mr: 1, color: "#007377" }} />
          Next Step
        </Fab>
        <TagsDialog
          open={open}
          close={setOpen}
          courseName={props.course.name}
          courseID={props.course.courseID}
          courseData={courseData}
          slideData={slideData}
        />
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
