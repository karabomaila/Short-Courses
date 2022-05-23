import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const canvas = {
  maxWidth: window.innerWidth * 0.672,
  minWidth: window.innerWidth * 0.672,
  backgroundColor: "white",
  border: "2px solid black",
  marginLeft: "5%",
  marginRight: "5%",
  marginBottom: "5px",
  minHeight: `${window.innerHeight * 0.7}px`,
};

const toolSty = {
  maxWidth: window.innerWidth * 0.672,
  minWidth: window.innerWidth * 0.672,
  backgroundColor: "white",
  border: "2px solid black",
  display: "flex",
  flexDirection: "row",
  marginTop: "5%",
  marginLeft: "5%",
  marginRight: "5%",
  
};

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

    //console.log(g)
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

    props.setCanvasTools(temp);
    renderTools(temp);
    setOpenPicDialog(false);
  };

  // useEffect(async () => {
  //   // var crs_id = courseID
  //   const q = query(
  //     slidesCollectionRef,
  //     where("courseID", "==", "23757367CGV6")
  //   );

  //   const data = await getDocs(q);
  //   //console.log(data.docs.map((doc) => JSON.stringify(doc.data())));
  //   // setSlides(data.docs.map((doc,index)=>{
  //   //   return {...doc.data(), id: doc.id}
  //   // }))
  //   console.log(data.docs);
  //   let final = {};
  //   let tmp = data.docs[0]._document.data.value.mapValue.fields;
  //   let chap = tmp.content.arrayValue.values[0].mapValue.fields;
  //   // let slide = chap.slides.arrayValue.values[0].mapValue.fields
  //   // console.log(slide.body.arrayValue.values[1].mapValue.fields)
  //   let tmpChaps = [];
  //   tmp.content.arrayValue.values.map((item, index) => {
  //     let tmp2 = item.mapValue.fields;
  //     let outcomes = [];
  //     tmp2.outcomes.arrayValue.values.map((item2) => {
  //       let outcome = item2.stringValue;
  //       outcomes.push(outcome);
  //     });
  //     let tmpSlides = [];
  //     tmp2.slides.arrayValue.values.map((tmpSlide) => {
  //       // let outcome = item2.stringValue
  //       let slide = tmpSlide.mapValue.fields;
  //       let tmpBody = [];
  //       slide.body.arrayValue.values.map((bodyItem) => {
  //         let temp2 = bodyItem.mapValue.fields;
  //         let ft = {
  //           id: temp2.id.integerValue,
  //           type: temp2.type.stringValue,
  //         };
  //         if (parseInt(ft.id) <= 3) {
  //           ft = { ...ft, content: temp2.content.stringValue };
  //         } else {
  //           ft = { ...ft, url: temp2.url.stringValue };
  //         }
  //         tmpBody.push(ft);
  //       });
  //       let tmpSlidee = {
  //         id: slide.id.integerValue,
  //         chapter: slide.chapter.integerValue,
  //         name: slide.name.stringValue,
  //         duration: slide.duration.integerValue,
  //         body: tmpBody,
  //       };
  //       tmpSlides.push(tmpSlidee);
  //     });
  //     let tmpChap = {
  //       id: tmp2.id.integerValue,
  //       name: tmp2.name.stringValue,
  //       slides: tmpSlides,
  //       outcomes: outcomes,
  //     };
  //     tmpChaps.push(tmpChap);
  //   });
  //   // console.log(tmp)
  //   let tmpImages = [];
  //   tmp.images.arrayValue.values.map((curr) => {
  //     tmpImages.push({
  //       id: curr.mapValue.fields.id.integerValue,
  //       url: curr.mapValue.fields.url.stringValue,
  //     });
  //   });

  //   let finalCourse = {
  //     name: tmp.name.stringValue,
  //     courseID: tmp.courseID.stringValue,
  //     description: tmp.description.stringValue,
  //     content: tmpChaps,
  //     images: tmpImages,
  //   };
  //   console.log(finalCourse);
  // });

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
        currTool.position.left -= $("#canvas").position().left;
        currTool.position.top -= $("#canvas").position().top;

        if (ui.helper.hasClass("text")) {
          currTool.type = "text";
          currTool.content ="";
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
    <div>
      <div style={toolSty}>
        {tools.map((tool, index) => {
          return <Tool key={index} tool={tool} />;
        })}
        <Button
          variant="outlined"
          style={{ position: "absolute", right: "50px",color: "black",borderColor:'black',border:'2px solid black' }}
          onClick={(event) => {
            event.preventDefault();

            if (props.chapters.length === 0) {
              props.setDisplayAlert(true);
            } else {
              if (props.edit === null) {
                props.setOpen4(true);
              } else {
                props.saveSlide();
              }
            }
          }}
        >
          Save
        </Button>
      </div>
      <div id="canvas" data-testid="canvasTest" style={canvas}></div>

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
