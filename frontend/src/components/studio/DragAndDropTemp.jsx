import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
import React, { useEffect, useState, useRef } from "react";
import { tools } from "./tools";
import Tool from "./Tool";
import renderTools from "./renderTools";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getStorage,
} from "@firebase/storage";
import { storage, db } from "./firebase-config";
import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { Button, Paper, Typography, Alert, Snackbar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const canvas = {
  maxWidth: window.innerWidth * 0.672,
  minWidth: window.innerWidth * 0.672,
  backgroundColor: "white",
  border: "1px solid black",
  marginLeft: "5%",
  top:'100px',
  marginRight: "5%",
  marginBottom: "5px",
  minHeight: `${window.innerHeight * 0.8}px`,
};

const tmpCanvasTools = [
  {
    _id: 1653242196015,
    position: {
      top: 115,
      left: 220,
    },
    type: "text",
    content: "",
    fontSize: 20,
    width: 100,
    height: 50,
  },
  {
    _id: 1653242197288,
    position: {
      top: 0,
      left: 460,
    },
    type: "image",
    url: "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
    width: 300,
    height: 200,
  },
  {
    _id: 1653279988289,
    position: {
      top: 122,
      left: 264,
    },
    type: "video",
    url: "https://www.youtube.com/embed/0Y11K7KSC80",
    width: 300,
    height: 200,
  },
];





function DragAndDrop(props) {
  const picsRef = useRef();
  const [openVidDialog, setOpenVidDialog] = React.useState(false);
  const [openPicDialog, setOpenPicDialog] = React.useState(false);
  const [openUploadAlert, setOpenUploadAlert] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [currVid, setCurrVid] = React.useState("");
  const [picUrl, setPicUrl] = React.useState("");
  const [currPic, setCurrPic] = React.useState("");
  const slidesCollectionRef = collection(db, "slides");

  const tmpCourseName = "CourseName";
  const tmpUserID = "UserID12345";

  const handleCloseVidDialog = () => {
    var tmp_url = document.getElementById("youtube").value;
    if (tmp_url !== "") {
      var tt = tmp_url.split("/");

      var temp = [
        ...props.canvasTools,
        {
          ...currVid,
          url: "https://www.youtube.com/embed/" + tt[tt.length - 1],
        },
      ];
      // console.log(temp)
      props.setCanvasTools(temp);
      renderTools(temp);

      document.getElementById("youtube").value = "";
      document.getElementById("youtubeCap").value = "";
      setOpenVidDialog(false);
    }
  };

  const handleClosePicDialog = () => {
    let imageURL = document.getElementById("imageURL").value;
    // console.log(imageURL)
    if (imageURL === "") {
    } else {
      var temp = [
        ...props.canvasTools,
        {
          ...currPic,
          url: imageURL,
        },
      ];
      // console.log(temp)
      props.setCanvasTools(temp);
      renderTools(temp);
      document.getElementById("imageURL").value="";
    }
    setOpenPicDialog(false);
  };

  const handleCloseUploadAlert = () => {
    setOpenUploadAlert(false);
  };

  const upAnddown = async (file1) => {
    const storage = getStorage();
    const storageRef1 = ref(
      storage,
      `/Courses/${tmpCourseName}/${tmpUserID}/${file1.name}`
    );
    // await uploadBytes(storageRef1, file1);
    const uploadTask1 = uploadBytesResumable(storageRef1, file1);
    picsRef.current.value = null;

    uploadTask1.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(prog);
    });

    let url = await getDownloadURL(
      ref(storage, `/Courses/${tmpCourseName}/${tmpUserID}/${file1.name}`)
    );

    console.log(url)
    return url;
  };

  const pictureshandler = async (e) => {
    e.preventDefault();
    const file1 = e.target[0].files[0];
    handleClosePicDialog();
    setOpenUploadAlert(true);

    const pictureURL = await upAnddown(file1);

    var temp = [
      ...props.canvasTools,
      {
        ...currPic,
        url: pictureURL,
      },
    ];

    console.log("singapha")

    props.setCanvasTools(temp);
    renderTools(temp);
    setOpenPicDialog(false);
  };

  useEffect(() => {
    $("#canvas").resizable({
      maxWidth: window.innerWidth * 0.672,
      minWidth: window.innerWidth * 0.672,
      handles: "se",
    });

    

    $("#canvas").droppable({
      drop: (event, ui) => {
        let video = false;
        let picture = false;
        let currTool = {
          _id: new Date().getTime(),
          position: ui.helper.position(),
        };
        // currTool.position.left -= $("#canvas").position().left;
        // currTool.position.top -= $("#canvas").position().top;

        if (ui.helper.hasClass("text")) {
          currTool.type = "text";
          currTool.content = "";
          currTool.fontSize =
            currTool.fontSize !== undefined ? currTool.fontSize : 20;
          currTool.width = currTool.width !== undefined ? currTool.width : 100;
          currTool.height =
            currTool.height !== undefined ? currTool.height : 50;
        } else if (ui.helper.hasClass("video")) {
          video = true;
          setOpenVidDialog(true);
          currTool.type = "video";
          currTool.url = currTool.url !== undefined ? currTool.url : "";
          currTool.width = currTool.width !== undefined ? currTool.width : 300;
          currTool.height =
            currTool.height !== undefined ? currTool.height : 200;
        } else if (ui.helper.hasClass("image")) {
          picture = true;
          currTool.type = "image";
          currTool.url = currTool.url !== undefined ? currTool.url : "";
          currTool.width = currTool.width !== undefined ? currTool.width : 300;
          currTool.height =
            currTool.height !== undefined ? currTool.height : 200;
          setOpenPicDialog(true);
        } else {
          return;
        }

        if (video) {
          setCurrVid(currTool);
        } else if (picture) {
          setCurrPic(currTool);
        } else {
          var temp = [...props.canvasTools, currTool];

          props.setCanvasTools(temp);

          renderTools(temp);
        }
      },
    });
  });

  return (
    <div >
      
      <Paper id="canvas" elevation={5} data-testid="canvasTest" style={canvas}></Paper>

      <Dialog
        open={openVidDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseVidDialog}
        aria-describedby="alert-dialog-slide-descriptionn"
      >
        <div style={{ backgroundColor: "#003b5c" }}>
          <DialogTitle style={{ color: "white", textAlign: "center" }}>
            {"Video url"}
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <TextField
                id="youtube"
                variant="filled"
                label="Link"
                style={{ backgroundColor: "#ffffff", borderRadius: "15px" }}
              />
              <TextField
                id="youtubeCap"
                variant="filled"
                label="Caption(Optional)"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "15px",
                  marginTop: "5px",
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              style={{ backgroundColor: "#ffffff", color: "#003b5c" }}
              onClick={handleCloseVidDialog}
            >
              NEXT
            </Button>
            <Button
              size="small"
              style={{ backgroundColor: "#ffffff", color: "#003b5c" }}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("youtube").value = "";
                document.getElementById("youtubeCap").value = "";
                setOpenVidDialog(false);
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Dialog
        open={openPicDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosePicDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ backgroundColor: "#003b5c" }}>
          <DialogTitle style={{ color: "#ffffff", textAlign: "center" }}>
            Add Image
          </DialogTitle>
          <DialogContent>
            <Paper>
              <div
                style={{ margin: "auto", textAlign: "center", padding: "10px" }}
              >
                <TextField varient="outlined" label="Image url" id="imageURL" />
                <Typography variant="h6">OR</Typography>
                <form
                  onSubmit={(event) => {
                    //alert(tmpTitle)
                    pictureshandler(event);
                  }}
                >
                  <div>
                    <input
                      type="file"
                      name="images"
                      required
                      className="form-control"
                      multiple
                      ref={picsRef}
                    />
                  </div>
                  <Button
                    type="submit"
                    id="sendBtn"
                    value="Send"
                    variant="dark"
                    style={{ display: "none" }}
                  >
                    send
                  </Button>
                </form>
              </div>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                backgroundColor: "#ffffff",
                color: "#003b5c",
                borderRadius: "15px",
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("sendBtn").click();
                handleClosePicDialog();
              }}
            >
              NEXT
            </Button>

            <Button
              style={{
                backgroundColor: "#ffffff",
                color: "#003b5c",
                borderRadius: "15px",
              }}
              onClick={(e) => {
                e.preventDefault();
                setOpenPicDialog(false);
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Snackbar
        open={openUploadAlert}
        autoHideDuration={6000}
        onClose={handleCloseUploadAlert}
      >
        <Alert
          onClose={handleCloseUploadAlert}
          severity="info"
          sx={{ width: "100%" }}
        >
          uploading image {progress}%
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DragAndDrop;
