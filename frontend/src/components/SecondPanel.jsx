import {
  Typography,
  Button,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Paper,
  TextField,
  Slide,
  Dialog,
  DialogTitle,
  IconButton,
  Fab,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React, { useState, useRef, useEffect, useReducer } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";

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
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TitleIcon from "@mui/icons-material/Title";
import { useLocation, useNavigate } from "react-router-dom";
import TagsDialog from "./tags/TagsDialog";

const reducer = (state, action) => {
  switch (action.type) {
    case "populateBoard":
      // alert('hi')
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "Clean":
      document.getElementById("NewSlide").click();
    // return [];
    default:
      return state;
  }
};

const tmp_chapters = [
  {
    id: 1,
    name: "Chapter 1",
    slides: [
      {
        id: 1,
        name: "Slide 1",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 1 chapter 1",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 1 chapter 1",
          },
          {
            id: 3,
            type: "image",
            src: "",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 1 chapter 1",
          },
        ],
      },
      {
        id: 2,
        name: "Slide 2",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 2 chapter 1",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 2 chapter 1",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 2 chapter 1",
          },
        ],
      },
      {
        id: 3,
        name: "Slide 3",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 3 chapter 1",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 3 chapter 1",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 3 chapter 1",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Chapter 2",
    slides: [
      {
        id: 1,
        name: "Slide 1",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 1 chapter 2",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 1 chapter 2",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 1 chapter 2",
          },
        ],
      },
      {
        id: 3,
        name: "Slide 3",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 3 chapter 2",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 3 chapter 2",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 3 chapter 2",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Chapter 3",
    slides: [
      {
        id: 1,
        name: "Slide 1",
        body: [
          {
            id: 1,
            type: "title",
            content: "Title for slide 1 chapter 3",
          },
          {
            id: 2,
            type: "subtitle",
            content: "Subtitle slide 1 chapter 3",
          },
          {
            id: 4,
            type: "paragraph",
            content: "paragraph slide 1 chapter 3",
          },
        ],
      },
    ],
  },
];

const PictureList = [
  {
    id: 1,
    type: "title",
    url: "https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=20&m=636379014&s=612x612&w=0&h=Zb6EobVr_BR278tpANKvKzfcQMIz-P_2Tv3XVXZufAM=",
  },
  {
    id: 2,
    type: "subtitle",
    url: "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg",
  },
  {
    id: 3,
    type: "paragraph",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSDP-1o0igyDWFDnUI2Rl7jQdR5edw1n6jvO40Y--PfmBGaRA-p_HJGcyQy8w3FU06u4&usqp=CAU",
  },
  {
    id: 4,
    type: "video",
    url: "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg",
  },
  {
    id: 5,
    type: "image",
    url: "https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg",
  },
];

const temp_slides = [
  {
    id: 1,
    name: "slide1",
    chapter: 0,
    body: [
      {
        id: 1,
        type: "title",
        content: "Title1",
      },
      {
        id: 2,
        type: "subtitle",
        content: "subTitle1",
      },
      {
        id: 3,
        type: "subtitle",
        content: "subTitle2",
      },
    ],
  },
  {
    id: 2,
    name: "slide2",
    chapter: 0,
    body: [
      {
        id: 1,
        type: "title",
        content: "Title1",
      },
      {
        id: 2,
        type: "paragraph",
        content: "paragraph",
      },
      {
        id: 3,
        type: "paragraph",
        content: "paragraph2",
      },
    ],
  },
];

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

const leftDiv = {
  position: "fixed",
  padding: "10px",
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  backgroundColor: "#003b5c",
  minWidth: "30%",
  maxWidth: "30%",
  height: "100vh",
};

const textareaStyle = {
  resize: "both",
  width: "100%",
  color: "black",
};

const rightDiv = {
  position: "fixed",
  marginLeft: "30%",
  padding: "40px",
  textAlign: "center",
  color: "white",
  overflowY: "scroll",
  minWidth: "70%",
  maxWidth: "70%",
  height: "100vh",
};

const boardSty = {
  minWidth: "100%",
  maxWidth: "100%",
  resize: "true",
  overflowY: "scroll",
  minHeight: "400px",
  maxHeight: "450px",
  border: "3px solid black",
};

function SecondPanel(props) {
  // ===================== For Tags =========================
  const [openTagsDialog, setOpenTagsDialog] = useState(false);

  // @Lindokuhle777 give me the following fileds...
  let courseName = props.course.name;
  let courseID = props.course.courseID;

  // =========================================================

  const picsRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [slides, setSlides] = React.useState([]);
  const [chapters, setChapters] = React.useState([]);
  const [openStudio, setOpenStudio] = React.useState(false);
  const [outcomes, setOutcomes] = useState([]);
  const [board, despatch] = useReducer(reducer, []);
  const [current, setCurrent] = useState([]);
  const [addSlideBool, setAddSlideBool] = useState(false);
  const [currChap, setCurrChap] = useState("");
  const [ppictureURL, SetPictureURL] = useState("no pictures to see here");
  let tmpTitle = "title";
  const [currSlideMins, setCurrSlideMins] = useState();
  const [currSlide, setCurrSlide] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [Display, setDisplay] = useState("");
  const [slideName, setSlideName] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // console.log(isOver)

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    despatch({ type: "add", payload: pictureList[0] });
  };

  const populateBoard = (slideId) => {
    let temp = [];
    //console.log(chap)

    slides.map((curr, index) => {
      //console.log(curr)
      if (slideId === curr.id) {
        //console.log('hi')

        curr.body.map((curr, index) => {
          if (curr.type === "title") {
            //console.log('title')
            var lindo = {
              id: 1,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          } else if (curr.type === "subtitle") {
            var lindo = {
              id: 2,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          } else if (curr.type === "paragraph") {
            var lindo = {
              id: 3,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          } else if (curr.type === "video") {
            var lindo = {
              id: 4,
              type: curr.type,
              url: curr.url,
            };
            temp.push(lindo);
          } else if (curr.type === "image") {
            var lindo = {
              id: 5,
              type: curr.type,
              url: curr.url,
            };
            temp.push(lindo);
          }
        });
      }
    });
    //console.log(temp)

    return temp;
  };

  const populateBoardd = () => {
    var temp = [];
    var curr = chapters.length !== 0 ? chapters[0] : null;
    if (curr !== null) {
      if (curr.slides.length !== 0) {
        var currSlideBody = curr.slides[0].body;

        currSlideBody.map((curr) => {
          if (curr.type === "title") {
            var lindo = {
              id: 1,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          } else if (curr.type === "subtitle") {
            var lindo = {
              id: 2,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          } else if (curr.type === "paragraph") {
            var lindo = {
              id: 3,
              type: curr.type,
              content: curr.content,
            };
            temp.push(lindo);
          }
        });
      }
    }

    console.log(temp);

    return temp;
  };

  const saveSlide = () => {
    var temp2 = document.getElementById("slideName").value;
    setSlideName(temp2 === "" ? null : temp2);
    console.log(temp2);
    var tt = [];

    board.map((item, index) => {
      console.log(item);
      var text = document.getElementById(
        currentChapter.toString() + index.toString() + "1" + item.type
      ).value;
      if (item.id < 4) {
        tt.push({ id: item.id, type: item.type, content: text });
      } else {
        tt.push({ id: item.id, type: item.type, url: item.url });
      }
    });
    //onsole.log(board)

    var tempSlide = {
      id: slides.length,
      name:
        slideName === null
          ? tt[0].content
          : document.getElementById("slideName").value,
      chapter: currentChapter,
      duration: currSlideMins,
      body: tt,
    };
    //alert(tempSlide)
    document.getElementById("slideName").value = "";
    if (currSlide === null) {
      setSlides((s) => {
        let t = [];
        s.map((slide) => {
          t.push(slide);
        });
        t.push(tempSlide);
        return t;
      });
    } else {
      setSlides((s) => {
        let t = [];
        s.map((slide, index) => {
          index === currSlide ? t.push(tempSlide) : t.push(slide);
        });

        return t;
      });
    }

    console.log(slides);
  };

  const deleteComp = (index) => {
    var t = board.filter((item, i) => {
      return i !== index;
    });
    var picture = board[index];

    despatch({ type: "populateBoard", payload: t });
    console.log(
      document.getElementById(
        currentChapter.toString() + index.toString() + "1" + picture.type
      )
    );
  };

  const setContent = () => {};

  useEffect(() => {
    console.log(props.user);
    console.log(props.course);

    var tmp =
      chapters.length === 0
        ? []
        : [0, chapters[0].slides.length !== 0 ? 0 : null];
    setCurrent(tmp);
    despatch({ type: "populateBoard", payload: populateBoardd() });
  }, [despatch]);

  const newSlidee = (indexx) => {
    setCurrentChapter(indexx);
    setCurrSlide(null);
    despatch({ type: "populateBoard", payload: [] });
    setOpenStudio(true);
    //despatch({type:'populateBoard',payload:[{id:1,type:'title',content:''}]});
    //document.getElementById(100).value='';
  };

  const handleChangeSelect = (event) => {
    //alert(event.target.value);
    setCurrSlideMins(event.target.value);
    event.target.value = null;
  };

  const openSaveDialog = (event) => {
    setOpen4(true);
  };

  const openOutcomes = (chapIndex) => {
    setOutcomes(chapters[chapIndex].outcomes);
    console.log(chapters[chapIndex].outcomes);

    chapters[chapIndex].outcomes.map((outcome, index) => {
      document.getElementById("outcome" + index.toString()).value = outcome;
    });

    handleClickOpen2();
  };

  const handleClickOpen = () => {
    tmpTitle = board[0].content;
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    var tmp = document.getElementById("ChapterName").value;

    setCurrChap(tmp);
    if (tmp !== "") {
      let temp_outcomes = [];
      outcomes.map((outcome, index) => {
        let curr = document.getElementById("outcome" + index.toString()).value;
        if (curr !== "") {
          temp_outcomes.push(curr);
        }
      });
      var temp = {
        id: chapters.length + 1,
        name: tmp,
        slides: [],
        outcomes: temp_outcomes,
      };
      setChapters([...chapters, temp]);
      var tmp = [chapters.length, null];
      console.log(chapters);
      setCurrent(tmp);
      setOpen2(false);
      document.getElementById("ChapterName").value = "";
      setOutcomes([]);
      setCurrentChapter(chapters.length);
    }
  };

  const handleClose3 = () => {
    var tmp_url = document.getElementById("youtube").value;
    if (tmp_url !== "") {
      var tt = tmp_url.split("/");

      alert(tt[tt.length - 1]);
      despatch({
        type: "populateBoard",
        payload: [
          ...board,
          {
            id: 4,
            type: "video",
            url: "https://www.youtube.com/embed/" + tt[tt.length - 1],
          },
        ],
      });
      document.getElementById("youtube").value = "";
      document.getElementById("youtubeCap").value = "";
      setOpen3(false);
    }
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    var tmp_url = document.getElementById("imageURL").value;
    if (tmp_url !== "") {
      despatch({
        type: "populateBoard",
        payload: [
          ...board,
          {
            id: 5,
            type: "image",
            url: tmp_url,
          },
        ],
      });
      document.getElementById("imageURL").value = "";
    } else {
      despatch({
        type: "populateBoard",
        payload: [
          ...board,
          {
            id: 5,
            type: "image",
            url: ppictureURL,
          },
        ],
      });
    }
    setOpen(false);
  };

  const handleClose4 = () => {
    saveSlide();
    setOpen4(false);
  };

  const slidesCollectionRef = collection(db, "slides");

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
    
    console.log()

    axios
      .post("http://localhost:5000/CreateCourse", {
        user_id: props.user[0].username.split("@")[0],
        crs_id: props.course.courseID,
        crs_name: props.course.name,
      })
      .then(async (res) => {
        alert(res);
        console.log(res);
        if (res.data==="1 record inserted"){
          await addDoc(slidesCollectionRef, {
            ...props.course,
            content: [...finalChapters],
          });
        }
      })
      .catch((err) => {});

    // ==================== Handling the tags... ============================
    setOpenTagsDialog(true);
  };

  useEffect(async () => {
    // var crs_id = courseID
    const q = query(
      slidesCollectionRef,
      where("courseID", "==", "23757367CGV6")
    );

    const data = await getDocs(q);
    //console.log(data.docs.map((doc) => JSON.stringify(doc.data())));
    // setSlides(data.docs.map((doc,index)=>{
    //   return {...doc.data(), id: doc.id}
    // }))
    console.log(data.docs);
    let final = {};
    let tmp = data.docs[0]._document.data.value.mapValue.fields;
    let chap = tmp.content.arrayValue.values[0].mapValue.fields;
    // let slide = chap.slides.arrayValue.values[0].mapValue.fields
    // console.log(slide.body.arrayValue.values[1].mapValue.fields)
    let tmpChaps = [];
    tmp.content.arrayValue.values.map((item, index) => {
      let tmp2 = item.mapValue.fields;
      let outcomes = [];
      tmp2.outcomes.arrayValue.values.map((item2) => {
        let outcome = item2.stringValue;
        outcomes.push(outcome);
      });
      let tmpSlides = [];
      tmp2.slides.arrayValue.values.map((tmpSlide) => {
        // let outcome = item2.stringValue
        let slide = tmpSlide.mapValue.fields;
        let tmpBody = [];
        slide.body.arrayValue.values.map((bodyItem) => {
          let temp2 = bodyItem.mapValue.fields;
          let ft = {
            id: temp2.id.integerValue,
            type: temp2.type.stringValue,
          };
          if (parseInt(ft.id) <= 3) {
            ft = { ...ft, content: temp2.content.stringValue };
          } else {
            ft = { ...ft, url: temp2.url.stringValue };
          }
          tmpBody.push(ft);
        });
        let tmpSlidee = {
          id: slide.id.integerValue,
          chapter: slide.chapter.integerValue,
          name: slide.name.stringValue,
          duration: slide.duration.integerValue,
          body: tmpBody,
        };
        tmpSlides.push(tmpSlidee);
      });
      let tmpChap = {
        id: tmp2.id.integerValue,
        name: tmp2.name.stringValue,
        slides: tmpSlides,
        outcomes: outcomes,
      };
      tmpChaps.push(tmpChap);
    });
    // console.log(tmp)
    let tmpImages = [];
    tmp.images.arrayValue.values.map((curr) => {
      tmpImages.push({
        id: curr.mapValue.fields.id.integerValue,
        url: curr.mapValue.fields.url.stringValue,
      });
    });

    let finalCourse = {
      name: tmp.name.stringValue,
      courseID: tmp.courseID.stringValue,
      description: tmp.description.stringValue,
      content: tmpChaps,
      images: tmpImages,
    };
    console.log(finalCourse);
  });

  //const pictureRef = useRef();

  const upAnddown = async (chapterName, title, file1) => {
    const storage = getStorage();
    const storageRef1 = ref(
      storage,
      `/Courses/${props.course.name}/${chapterName}/${title}/${file1.name}`
    );
    await uploadBytes(storageRef1, file1);
    picsRef.current.value = null;
    let g = await getDownloadURL(
      ref(
        storage,
        `/Courses/${props.course.name}/${chapterName}/${title}/${file1.name}`
      )
    );
    //console.log(g)
    return g;
  };

  const pictureshandler = async (e, chapterName, title) => {
    e.preventDefault();
    const file1 = e.target[0].files[0];
    //const courseName = e.target[1].value;
    console.log(file1);
    handleClose();
    // uploadFiles(file1,file2)
    //alert(title)
    // const storageRef1 = ref(storage, `/Courses/${props.courseName}/${chapterName}/${title}/${file1.name}`);
    // await uploadBytes(storageRef1, file1);
    const pictureURL = await upAnddown(chapterName, title, file1);
    console.log(pictureURL);
    alert(pictureURL);
    SetPictureURL(pictureURL);
    console.log(ppictureURL);
    despatch({
      type: "populateBoard",
      payload: [
        ...board,
        {
          id: 5,
          type: "image",
          url: pictureURL,
        },
      ],
    });

    //   uploadTask1.on("state_changed", (snapshot) => {
    //     const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);

    //     setProgress(prog);
    //   },
    //     (err) => console.log(err),
    //     () => {
    //       getDownloadURL(uploadTask1.snapshot.ref).then((url) => console.log(url))
    //     }
    //   )
  };

  const list = () => (
    <List>
      {board.map((item, index) => (
        <>
          <ListItem
            button
            key={item.type}
            style={{ backgroundColor: "white" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(currentChapter + index + 1).focus();
            }}
          >
            <ListItemIcon>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText primary={item.type} style={{ color: "#000000" }} />
            <ListItemIcon>
              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  deleteComp(index);
                }}
              >
                <ClearIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={leftDiv}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <IconButton onClick={(event) => props.handletab(event, 0)}>
            <ArrowBack style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h4">Course Content</Typography>
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
          >
            New Chapter
          </Button>

          <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            {chapters.length !== 0 ? (
              <>
                {chapters.map((chapter, indexx) => {
                  return (
                    <Accordion key={indexx}>
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
                              newSlidee(indexx);
                            }}
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#003b5c",
                              borderRadius: "15px",
                              marginRight: "5px",
                            }}
                          >
                            New Slide
                          </Button>

                          <Button
                            variant="text"
                            onClick={(event) => {
                              event.preventDefault();
                              openOutcomes(indexx);
                            }}
                            style={{
                              color: "#ffffff",
                              backgroundColor: "#003b5c",
                              borderRadius: "15px",
                            }}
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

                                const i = populateBoard(slide.id);
                                setContent();
                                setCurrSlide(index);
                                despatch({ type: "populateBoard", payload: i });
                                console.log(board);
                                setCurrentChapter(indexx);
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
                  <Typography variant="h4" style={{ color: "#003b5c" }}>
                    No chapters
                  </Typography>
                </div>
              </>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Components
          </Typography>
          {board.length !== 0 ? list("right") : null}
        </div>
      </div>

      <div style={rightDiv}>
        {chapters.length !== 0 ? (
          <>
            <div
              style={{
                minWidth: "100%",
                border: "3px solid black",
                display: "flex",
                flexdirection: "row",
                backgroundColor: "#003b5c",
                padding: "5px",
              }}
            >
              {PictureList.map((picture, index) => {
                return (
                  <Picture
                    url={picture.url}
                    id={picture.id}
                    key={index}
                    type={picture.type}
                    handleClickOpen={handleClickOpen}
                    handleClickOpen3={handleClickOpen3}
                  />
                );
              })}
              <Button
                variant="outlined"
                id="idd"
                onClick={(event) => {
                  event.preventDefault();
                  currSlide === null ? openSaveDialog() : saveSlide();
                }}
              >
                Save
              </Button>
            </div>

            <div style={boardSty} ref={drop}>
              <>
                {board.map((picture, index) => {
                  if (picture.type === "title") {
                    console.log(picture);
                    return (
                      <textarea
                        autoFocus
                        key={index}
                        id={
                          currentChapter.toString() +
                          index.toString() +
                          "1" +
                          picture.type
                        }
                        type={picture.type}
                        style={{
                          ...textareaStyle,
                          fontSize: "25px",
                          textAlign: "center",
                        }}
                        value={picture.content}
                      ></textarea>
                    );
                  } else if (picture.type === "subtitle") {
                    return (
                      <textarea
                        autoFocus
                        key={index}
                        id={
                          currentChapter.toString() +
                          index.toString() +
                          "1" +
                          picture.type
                        }
                        type={picture.type}
                        style={{ ...textareaStyle, fontSize: "20px" }}
                        value={picture.content}
                      ></textarea>
                    );
                  } else if (picture.type === "paragraph") {
                    return (
                      <textarea
                        autoFocus
                        key={index}
                        id={
                          currentChapter.toString() +
                          index.toString() +
                          "1" +
                          picture.type
                        }
                        type={picture.type}
                        style={{ ...textareaStyle, fontSize: "15px" }}
                        value={picture.content}
                      ></textarea>
                    );
                  } else if (picture.type === "image") {
                    return (
                      <div style={{ resize: "both", overflow: "auto" }}>
                        <img
                          style={{
                            border: "2px solid black",
                            maxWidth: "95%",
                            maxHeight: "95%",
                          }}
                          key={index}
                          id={
                            currentChapter.toString() +
                            index.toString() +
                            "1" +
                            picture.type
                          }
                          type={picture.type}
                          src={picture.url}
                        ></img>
                      </div>
                    );
                  } else if (picture.type === "video") {
                    return (
                      <div>
                        <iframe
                          key={index}
                          id={
                            currentChapter.toString() +
                            index.toString() +
                            "1" +
                            picture.type
                          }
                          style={{ resize: "both", overflow: "auto" }}
                          src={picture.url}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    );
                  }
                })}
                <Fab
                  color="primary"
                  aria-label="add"
                  style={fabStyle}
                  onClick={handleShow}
                >
                  <DoneIcon />
                </Fab>
              </>
            </div>
          </>
        ) : (
          <>
            <Typography variant="h1" style={{ color: "#000000" }}>
              Studio Closed
            </Typography>
          </>
        )}
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ backgroundColor: "#003b5c" }}>
          <DialogTitle style={{ color: "#ffffff", textAlign: "center" }}>
            <h4>Add Image</h4>
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
                    pictureshandler(event, currChap, tmpTitle);
                  }}
                >
                  <div>
                    <input
                      type="file"
                      name="images"
                      id=""
                      required
                      class="form-control"
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
                handleClose();
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
                setOpen(false);
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </div>
      </Dialog>

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
                />
              </div>

              <Typography variant="h5">
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
                      <li style={{ color: "#000000" }}>
                        <div>
                          <textarea
                            rows="1"
                            id={"outcome" + index.toString()}
                            foc
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
            <Button onClick={handleClose2}>NEXT</Button>
            <Button
              onClick={(event) => {
                document.getElementById("ChapterName").value = "";
                setOpen2(false);
                setOutcomes([]);
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Dialog
        open={open3}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose3}
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
              onClick={handleClose3}
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
                setOpen3(false);
              }}
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
          <Typography variant="h5" style={{ margin: "5px", color: "#ffffff" }}>
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
            <InputLabel id="demo">Estimated slide duration</InputLabel>
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
          >
            Save
          </Button>
        </Paper>
      </Dialog>

      <TagsDialog
        open={openTagsDialog}
        close={setOpenTagsDialog}
        courseName={courseName}
        courseID={courseID}
      />
    </div>
  );
}

export default SecondPanel;
