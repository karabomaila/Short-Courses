import React from "react";
import AppBar from "./AppBar";
import Drawer from "@mui/material/Drawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import {
  FormControl,
  IconButton,
  Typography,
  Button,
  Box,
  Fab,
  InputLabel,
  Select,
  Alert,
  MenuItem,
  Paper,
  SwipeableDrawer,
  TextField,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Snackbar,
} from "@mui/material";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} from "@firebase/firestore";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { storage, db } from "../firebase-config";
import DragAndDropTemp from "./DragAndDropTemp";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import renderTools from "./renderTools";
import TagsDialog from "../tags/TagsDialog";
import axios from "axios";

const mins = [2, 5, 10, 15, 20, 30, 40, 50, 60];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#d9c93b",
};

const mainDiv = {
  position: "absolute",
  backgroundColor: "#edeef0",
  width: "75%",
  maxHeight: "100%",
  top: "0px",
  bottom: "0px",
  resize: true,
  overflowY: "auto",
};

const leftDiv = {
  position: "fixed",
  padding: "10px",
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  backgroundColor: "#003b5c",
  minWidth: "25%",
  maxWidth: "25%",
  height: "100vh",
};

function Leftpanel(props) {
  const [openTagsDialog, setOpenTagsDialog] = React.useState(false);
  const slidesCollectionRef = collection(db, "slides");
  const [currSlideMins, setCurrSlideMins] = React.useState();
  const [outcomes, setOutcomes] = React.useState([]); //Learning outcomes of the current chapter
  const [chapters, setChapters] = React.useState([]); //List of all the chapters
  const [slides, setSlides] = React.useState([]);
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [edit, setEdit] = React.useState(null);
  const [currentChapter, setCurrentChapter] = React.useState(0);
  const [open2, setOpen2] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });

  const handleShow = async () => {
    //Simnandi
    //alert("Simnandi");
    // console.log(slides);
    // console.log(chapters);

    var finalChapters = [];

    chapters.map((chapter, index) => {
      var temp = slides.filter((slide) => slide.chapter === index);
      finalChapters.push({ ...chapter, slides: temp });
    });

    console.log(finalChapters);
    //setShow(true);

    console.log();
    try {
      axios
        .post("http://localhost:5000/CreateCourse", {
          user_id: props.user[0].username.split("@")[0],
          crs_id: props.course.courseID,
          crs_name: props.course.name,
        })
      .then(async (res) => {
        alert(res);
        console.log(res);
        if (res.data === "1 record inserted") {
          await addDoc(slidesCollectionRef, {
            ...props.course,
            content: [...finalChapters],
          });
        }
      })
      .catch((err) => { });
    }
    catch (e) {
      alert(e)
    }

    // ==================== Handling the tags... ============================
    setOpenTagsDialog(true);
  };

  const handleClickOpen2 = () => {
    //open the new chapter dialog
    setOpen2(true);
  };

  const handleChangeSelect = (event) => {
    setCurrSlideMins(event.target.value);
  };

  const newSlide = (indexx) => {
    props.setCanvasTools([]);
    renderTools([]);

    if (props.canvasTools.length === 0) {
      //if the canvas is empty, just set the current chapter to indexx
      setCurrentChapter(indexx);
    } else {
      // if its not, the set the current chapter to indexx the call save slide.
      saveSlide();
      setCurrentChapter(indexx);
    }
  };

  const saveSlide = () => {
    if (edit === null) {
      // we're creating a new slide

      let tmpSlide = {
        id: slides.length,
        chapter: currentChapter,
        name: document.getElementById("slideName").value,
        content: props.canvasTools,
      };

      setSlides([...slides, tmpSlide]);
      props.setCanvasTools([]);
      renderTools([]);

    } else {

      console.log(edit);

      let TmpNewSlides = [];

      slides.map((item, index) => {
        if (index === edit.slide) {
          TmpNewSlides.push({ ...item, content: props.canvasTools });
        } else {
          TmpNewSlides.push(item);
        }
      });

      setSlides(TmpNewSlides);

      setEdit(null);
      props.setCanvasTools([]);
      renderTools([]);
    }
  };

  const handleClose4 = () => {
    saveSlide();

    setOpen4(false);
  };

  const handleClose2 = () => {
    //Close the new slide dialog and save the save chapter name and learning outcomes of that chapter

    var tmp = document.getElementById("ChapterName").value;
    console.log(tmp);

    if (tmp !== "") {
      let temp_outcomes = [];
      outcomes.map((item, index) => {
        temp_outcomes.push(
          document.getElementById("outcome" + index.toString()).value
        );
        document.getElementById("outcome" + index.toString()).value = "";
      });

      let chapter = {
        id: chapters.length,
        name: tmp,
        outcomes: temp_outcomes,
      };
      setChapters([...chapters, chapter]);

      setOpen2(false);
      document.getElementById("ChapterName").value = "";
      setOutcomes([]);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleCloseAlert = (event) => {
    setDisplayAlert(false);
  };

  const list = () => (
    <Box>
      <div style={leftDiv}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <IconButton>
            <ArrowBack style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h4" data-testid="hearder">
            Course Content
          </Typography>
        </div>

        <div style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}>
          <Button
            variant="contained"
            onClick={handleClickOpen2}
            style={{
              color: "#003b5c",
              backgroundColor: "#ffffff",
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
                                props.setCanvasTools(slide.content);
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
                  <Typography variant="h4" style={{ color: "#003b5c" }} data-testid="NoChapters">
                    No chapters
                  </Typography>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div style={mainDiv}>
      <AppBar toggleDrawer={toggleDrawer} courseName={props.course.name} />
      <Snackbar
        open={displayAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="warning"
          sx={{ width: "100%" }}
          data-testid="Datafirst"
        >
          Please create a chapter first
        </Alert>
      </Snackbar>

      <DragAndDropTemp
        canvasTools={props.canvasTools}
        despatch={props.despatch}
        setCanvasTools={props.setCanvasTools}
        setOpen4={setOpen4}
        setDisplayAlert={setDisplayAlert}
        chapters={chapters}
        edit={edit}
        saveSlide={saveSlide}
      />

      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <Fab
        color="primary"
        aria-label="add"
        style={fabStyle}
        onClick={handleShow}
      >
        <DoneIcon />
      </Fab>

      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-descriptionn"
      >
        <div style={{ backgroundColor: "#ffffff" }}>
          <DialogTitle>{"New Chapter"}</DialogTitle>
          <DialogContent>
            <Paper
              style={{
                background: "#003b5c",
                color: "#ffffff",
                textAlign: "center",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  margin: "auto",
                  borderRadius: "10px",
                  width: "80%",
                }}
              >
                <TextField
                  variant="filled"
                  id="ChapterName"
                  label="ChapterName"
                  style={{ width: "100%" }}
                  data-testid="ChapterName"
                  value={""}
                >
                  {""}
                </TextField>
              </div>

              <Typography variant="h5" data-testid="DataOutcomes">
                Please specify the learning outcomes of this chapter
              </Typography>
              <Button
                style={{
                  backgroundColor: "#d9c93b",
                  color: "#ffffff",
                  borderRadius: "15px",
                  width: "20%",
                  align: "right",
                  marginLeft: "70%",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setOutcomes([...outcomes, outcomes.length]);
                }}
                data-testid="AddButton"
              >
                Add
              </Button>
              <div
                style={{
                  width: "90%",
                  padding: "10px",
                  border: "3px solid #003b5c",
                  margin: "auto",
                  borderRadius: "15px",
                  backgroundColor: "#ffffff",
                }}
              >
                <ul>
                  {outcomes.map((item, index) => {
                    return (
                      <li style={{ color: "#000000" }} key={index * 2}>
                        <div>
                          <textarea
                            rows="1"
                            id={"outcome" + index.toString()}
                            style={{
                              minWidth: "95%",
                              resize: "both",
                              border: "0px solid",
                            }}
                            autoFocus
                          ></textarea>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} data-testid="NextButton">NEXT</Button>
            <Button
              onClick={(event) => {
                document.getElementById("ChapterName").value = "";
                setOpen2(false);
                setOutcomes([]);
              }}
              data-testid="CancelButton"
            >
              CANCEL
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Dialog
        open={open4}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose4}
        aria-describedby="alert-dialog-slide-description"
      >
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#003b5c",
          }}
        >
          <Typography variant="h5" style={{ margin: "5px", color: "#ffffff" }} data-testid="SaveSlide">
            Save Slide
          </Typography>
          <TextField
            variant="filled"
            style={{
              marginBottom: "10px",
              color: "#ffffff",
              background: "white",
              borderRadius: "5px",
            }}
            label="Slide name"
            id="slideName"
          />
          <FormControl
            variant="standard"
            style={{
              marginBottom: "10px",
              color: "#ffffff",
              background: "white",
              borderRadius: "5px",
            }}
          >
            <InputLabel id="demo" data-testid="EstimatedDuration">Estimated slide duration</InputLabel>
            <Select
              labelId="demoSelect"
              value={currSlideMins}
              onChange={handleChangeSelect}
            >
              {mins.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            onClick={handleClose4}
            style={{ color: "#ffffff", backgroundColor: "#d9c93b" }}
            data-testid="SaveButton"
          >
            Save
          </Button>
        </Paper>
      </Dialog>

      <TagsDialog
        open={openTagsDialog}
        close={setOpenTagsDialog}
        courseName={props.course.name}
        courseID={props.course.courseID}
      />
    </div>
  );
}

export default Leftpanel;
