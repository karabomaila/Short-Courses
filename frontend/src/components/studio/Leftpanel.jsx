import React, { useContext } from "react";
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
  TextField,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Snackbar,
} from "@mui/material";
import { collection, addDoc } from "@firebase/firestore";
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
import StudioContext from "./StudioContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const mainDiv = {
  position: "absolute",
  backgroundColor: "#edf4f5",
  width: "75%",
  maxHeight: "100%",
  top: "0px",
  bottom: "0px",
  resize: true,
  overflowY: "auto",
  paddingBottom: "50px",
};

const leftDiv = {
  position: "fixed",
  padding: "10px",
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  backgroundColor: "#007377",
  minWidth: "25%",
  maxWidth: "25%",
  height: "100vh",
};

function Leftpanel(props) {
  const {
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
    setOutcomes,
  } = useContext(StudioContext);
  const [openTagsDialog, setOpenTagsDialog] = React.useState(false);
  const slidesCollectionRef = collection(db, "slides");

  // const [open2, setOpen2] = React.useState(false);

  const [state, setState] = React.useState({
    left: false,
  });

  const handleShow = async () => {
    var finalChapters = [];

    chapters.map((chapter, index) => {
      var temp = slides.filter((slide) => slide.chapter === index);
      finalChapters.push({ ...chapter, slides: temp });
    });

    try {
      axios
        .post("http://localhost:5000/CreateCourse", {
          user_id: props.user[0].username.split("@")[0],
          crs_id: props.course.courseID,
          crs_name: props.course.name,
        })
        .then(async (res) => {
          // alert(res);
          console.log(res);
          if (res.data === "1 record inserted") {
            await addDoc(slidesCollectionRef, {
              ...props.course,
              content: [...finalChapters],
            });
            setOpenTagsDialog(true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (e) {
      alert(e);
    }
  };

  // const handleClickOpen2 = () => {
  //   //open the new chapter dialog
  //   setOpen2(true);
  // };

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

  return (
    <div style={mainDiv}>
      <AppBar
        toggleDrawer={toggleDrawer}
        courseName={props.course.name}
        setDisplayAlert={setDisplayAlert}
        setOpen4={setOpen4}
        saveSlide={saveSlide}
        chapters={chapters}
        edit={edit}
      />
      <Snackbar
        open={displayAlert}
        autoHideDuration={15000}
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
        style={{ marginTop: "100px" }}
      />

      <Dialog
        fullWidth
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-descriptionn"
      >
        <div style={{ backgroundColor: "#ffffff" }}>
          <DialogTitle>{"New Chapter"}</DialogTitle>
          <DialogContent>
            <div
              style={{
                backgroundColor: "#ffffff",
                margin: "auto",
                borderRadius: "10px",
                width: "80%",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                label="Chapter Name"
                id="ChapterName"
                placeholder="Chapter Name"
                inputProps={{ "data-testid": "ChapterName" }}
                style={{ marginTop: 12, width: "100%" }}
              ></TextField>
            </div>

            <p style={{ margin: 0, marginTop: 11, fontSize: 11 }}>
              Specify the learning outcomes of this chapter
            </p>

            <div
              style={{
                width: "80%",
                padding: "5px",
                border: "1px solid #003b5c",
                margin: "auto",
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

            <Button
              style={{
                backgroundColor: "#007377",
                color: "#ffffff",
                borderRadius: "15px",
                width: "20%",
                align: "right",
                marginLeft: "70%",
                marginTop: 12,
              }}
              onClick={(event) => {
                event.preventDefault();
                setOutcomes([...outcomes, outcomes.length]);
              }}
              data-testid="AddButton"
            >
              Add
            </Button>
          </DialogContent>
          <DialogActions>
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
            <Button onClick={handleClose2} data-testid="NextButton">
              Next
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
          <Typography
            variant="h5"
            style={{ margin: "5px", color: "#ffffff" }}
            data-testid="SaveSlide"
          >
            Save Slide
          </Typography>
          <TextField
            variant="filled"
            style={{
              marginBottom: "10px",
              color: "#007377",
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
            <InputLabel id="demo" data-testid="EstimatedDuration">
              Estimated slide duration
            </InputLabel>
            <Select
              labelId="demoSelect"
              value={currSlideMins}
              onChange={handleChangeSelect}
            >
              {[2, 5, 10, 15, 20, 30, 40, 50, 60].map((itemm, index) => {
                return (
                  <MenuItem value={itemm} key={index}>
                    {itemm}
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
