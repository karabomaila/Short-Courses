import { TextField, Button, Typography, Paper } from "@mui/material";
import React, { useState, useRef,useContext,useEffect } from "react";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { useMsal } from "@azure/msal-react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  getStorage,
} from "@firebase/storage";
import createID from "./GenCourseID";
import {UserDataContext} from "./ContextAPI/UserDataContext"

function Firstpanel({ handletab, setCourse,course }) {
  const {user} = useContext(UserDataContext);
  const [showimageupload, setshowimageupload] = useState(false);
  const [images, setImages] = useState([]);
 

  const onclick = () => {
    setshowimageupload(!showimageupload);
  };

  

  useEffect(() => {
    const courseStorage = window.sessionStorage.getItem("course");
    if(courseStorage!==null){
      const currCourse = JSON.parse(courseStorage);
      document.getElementById("courseName").value = currCourse.name;
      document.getElementById("courseDes").value = currCourse.description;
      setImages(currCourse.images);

    }
  },[])

  const handletabChange = (event, num) => {
    event.preventDefault();

    const courseName = document.getElementById("courseName");
    if(courseName.value===""){

    }else{
      let temp = {
        name: courseName.value,
        courseID: createID(
          user.userID,
          courseName.value
        ),
        description: document.getElementById("courseDes").value,
        images: images,
      };
      setCourse(temp);
      handletab(event, num);
      // window.sessionStorage.setItem("course",JSON.stringify(temp));
    }
    

    
  };

  const handleBtn = (e) => {
    e.preventDefault();
    let temp = document.getElementById("chowed").value;
    if (temp === "") {
      document.getElementById("faith").click();
    } else {
      setImages([...images,temp]);
      document.getElementById("chowed").value = "";
    }
    
  };

  const picsRef = useRef();
  const upAnddown = async (file1) => {
    const storage = getStorage();
    const storageRef1 = ref(storage, `/Courses/${file1.name}`);
    await uploadBytes(storageRef1, file1);
    picsRef.current.value = null;
    let g = await getDownloadURL(ref(storage, `/Courses/${file1.name}`));
    console.log(g);
    return g;
  };

  const pictureshandler = async (e) => {
    e.preventDefault();
    const file1 = e.target[0].files[0];

    console.log(file1);

    const pictureURL = await upAnddown(file1);
    console.log(pictureURL);
    setImages([...images, pictureURL ]);
    
  };

  return (
    <div data-testid = 'first-panel-div'
      style={{
        backgroundColor: '#edf4f5',
        margin: "0px",
        minHeight: "100vh",
        
      }}
    >

      <div style = {NavStyle}>
          <BubbleChartIcon fontSize='large' sx = {{color: 'white'}}/>
          <p style ={{color: 'white', fontWeight: 'bold', margin: 10, fontSize: 24}}>STUDIO</p>
        </div>
      <Paper
        elevation={20}
        style={{
          backgroundColor: "#ffffff",
          width: "50%",
          height: "80%",
          border: "8px",
          borderRadius: "15px",
          borderColor: "#007377",
          margin: "auto",
          borderRadius: "4",
          pading: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          data-testid="courseName"
          id="courseName"
          label="Course name"
          variant="outlined"
          size="small"
          style={{ marginTop: "25px", padding: "10px" }}
        />

        <TextField
          id="courseDes"
          label="Course description"
          variant="outlined"
          size="small"
          style={{ marginTop: "5px", padding: "10px" }}
        />
        <div>
          <Button
            data-testid="addImageBtn"
            variant="contained"
            style={{ margin: "10px 5px 30px 50px",backgroundColor:"#007377" }}
            onClick={onclick}
          >
            Add Image{" "}
          </Button>
        </div>

        {showimageupload && (
          <>
            <TextField
              varient="outlined"
              id="chowed"
              label="Image url"
              size="small"
              style={{ margin: "0px 60px 2px 50px" }}
            />
            <form onSubmit={pictureshandler}>
              <div className="Imageupload">
                <input
                  style={{ margin: "0px 5px 0px 50px" }}
                  type="file"
                  id="image"
                  name="file "
                  multiple
                  ref={picsRef}
                  onChange={(e) => this.handlefile(e)}
                />
              </div>
              <Button
                variant="contained"
                id="faith"
                type="submit"
                style={{ margin: "2px 10px 30px 90px", display: "none" }}
              ></Button>
            </form>
            <Button
              data-testid="uploadBtn"
              variant="contained"
              onClick={handleBtn}
              style={{ margin: "2px 10px 30px 90px" ,backgroundColor: "#007377"}}
            >
              upload
            </Button>
          </>
        )}

        <div style={container}>
          {images.length === 0 ? (
            <Typography>No photos</Typography>
          ) : (
            <>
              {images.map((image) => {
                
                return (
                  <img
                    src={image.url}
                    key={image.id}
                    style={{ width: "50px", height: "50px" }}
                  />
                );
              })}
            </>
          )}
        </div>
        <div>
          <Button 
            variant="contained"
            data-testid="nextBtn"
            style={{
              backgroundColor: "#007377",
              margin: "10px 50px 50px 500px ",
              marginBottom: "10px",
            }}
            onClick={(event) => handletabChange(event, 1)}
          >
            Next{" "}
          </Button>
        </div>
      </Paper>
    </div>
  );
}

const container = {
  width: "350px",
  margin: "30px auto",
  overflow: "auto",
  height: "100px",
  border: "3px solid #007377",
  padding: "30px",
  borderRadius: "5px",
};

const NavStyle = {
  display: 'flex',
  flexDirection: 'row',
  background: '#007377',
  alignItems: 'center',
  marginBottom: 12,
  padding: 3,
  width: '100%'
}

export default Firstpanel;
