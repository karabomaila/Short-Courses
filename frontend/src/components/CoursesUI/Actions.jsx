import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import GetInfo from "../AboutCourse/GetInfo";
import { useNavigate } from "react-router-dom";

const Actions = (props) => {
  const navigate = useNavigate();

  const onClick = async () => {
    switch (props.click) {
      case "view":
        navigate(`/CreateCourse/${props.name}`, {
          state: {
            student: false,
            user: props.user,
            crs_id: props.crs_id,
          },
        });
        break;

      case "info":
        let getInfo = new GetInfo(props.info, props.crs_id);
        props.setDataObject(getInfo.PullData());
        props.setOpenAbout(true);
        break;

      case "edit":
        console.log(props.courseID);
        await axios
          .post("/getSlides", { courseID: props.courseID })
          .then(async (res) => {
            console.log(res.data);
            let temp = await {
              name: res.data.courseName,
              courseID: res.data.courseID,
              description: props.description,
              images: props.images,
            };
            navigate("/CreateCourse", {
              state: {
                edit: true,
                courseID: props.courseID,
                description: props.description,
                images: props.images,
                course: temp,
              },
            });
          })
          .then((err) => {});

        break;

      case "learn":
        onLearn(props.courseID);
        break;
      default:
    }
  };

  const onLearn = async (courseID) => {
    await axios
      .post("/getSlides", { courseID: courseID })
      .then((response) => {
        navigate("/Hub", { state: { course: response.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      data-testid="ui-action"
      variant="outlined"
      style={Style}
      onClick={onClick}
    >
      {props.title}
    </Button>
  );
};

const Style = {
  margin: 5,
  color: "#003b5c",
  borderColor: "#daa520",
};

export default Actions;
