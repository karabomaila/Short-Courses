import { Button } from "@mui/material";
import React, { useState,useReducer,useEffect } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";

const mainDiv = {
  
  display: "flex",
  flexDirection: "row",
  height: "100%"
};





function Main(props) {
  const [canvasTools,setCanvasTools] = useState([]);
  const [active,setActive] = useState(null);
  const [canvasTools2, despatch] = useReducer((state, action) => {
    // setCanvasTools2(action.payload);
    return action.payload;
  }, []);

  

  
  
  

 
  
  return (
    <div style={mainDiv}>
      
      <Leftpanel canvasTools={canvasTools} despatch={despatch} setCanvasTools={setCanvasTools} course={props.course} user={props.user} />
      <RightPanel canvasTools={canvasTools} setCanvasTools={setCanvasTools} course={props.course}  />
    </div>
  );
}

export default Main;
