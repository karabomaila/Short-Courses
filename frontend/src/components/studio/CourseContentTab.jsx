import React,{useContext,useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Button,
  Box,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import renderTools from "./renderTools";
import StudioContext from "./StudioContext"


  const leftDiv = {
    position: "fixed",
    padding: "10px",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    backgroundColor: 'inherit',
    minWidth: "25%",
    maxWidth: "25%",
    height: "100vh",
  };


function CourseContentTab() {

    const {canvasTools,setCanvasTools} = useContext(StudioContext);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [open2, setOpen2] = React.useState(false);
    const [slides, setSlides] = React.useState([]);
    const [edit, setEdit] = React.useState(null);
    const [chapters, setChapters] = React.useState([]); //List of all the chapters

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
    
    
    const handleClickOpen2 = () => {
        //open the new chapter dialog
        setOpen2(true);
      };


      const newSlide = (indexx) => {
        setCanvasTools([]);
        renderTools([]);
    
        if (canvasTools.length === 0) {
          //if the canvas is empty, just set the current chapter to indexx
          setCurrentChapter(indexx);
        } else {
          // if its not, the set the current chapter to indexx the call save slide.
          saveSlide();
          setCurrentChapter(indexx);
        }
      };

  return (
    <Box>
      <div style={leftDiv}>

        <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
          <Button
            variant="contained"
            onClick={handleClickOpen2}
            style={{
              color: "white",
              backgroundColor: "#007377",
              margin: "10%",
              width: "70%",
              borderRadius: "20px",
              fontSize: "15px",
            }}
            data-testid="NewChapterButton"
          >
            New Chapter
          </Button>

          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            {chapters.length !== 0 ? (
              <>
                {chapters.map((chapter, indexx) => {
                  return (
                    <Accordion key={indexx} data-testid="Accordion">
                      <AccordionSummary
                        id={indexx}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                      >
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Typography>{chapter.name}</Typography>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div>
                          <Button
                            variant="text"
                            id="NewSlide"
                            onClick={(event) => {
                              event.preventDefault();
                              newSlide(indexx);
                              setEdit(null);
                            }}
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#003b5c",
                              borderRadius: "15px",
                              marginRight: "5px",
                            }}
                            data-testid="NewSlideButton"
                          >
                            New Slide
                          </Button>

                          <Button
                            variant="text"
                            onClick={(event) => {
                              event.preventDefault();
                            }}
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#003b5c",
                              borderRadius: "15px",
                            }}
                            data-testid="OutcomesButton"
                          >
                            Outcomes
                          </Button>
                        </div>

                        {slides.map((slide, index) => {
                          return slide.chapter === indexx ? (
                            <Button
                              key={index}
                              variant="text"
                              id="slideBtn"
                              onClick={(event) => {
                                event.preventDefault();
                                renderTools(slide.content);
                                setCanvasTools(slide.content);
                                setEdit({ slide: index, chapter: indexx });
                              }}
                              style={{
                                borderBottom: "1px solid black",
                                cursor: "pointer",
                                width: "100%",
                                color: "black",
                              }}
                            >
                              {slide.name}
                            </Button>
                          ) : null;
                        })}
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </>
            ) : (
              <>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "10px",
                    border: "3 ##003b5c solid",
                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ color: "#003b5c" }}
                    data-testid="NoChapters"
                  >
                    No chapters
                  </Typography>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Box>
  )
}

export default CourseContentTab