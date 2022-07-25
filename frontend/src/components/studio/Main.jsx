import { Button } from "@mui/material";
import React, { useState,useReducer,useEffect } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";
import studioContext from "./StudioContext";

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
      <studioContext.Provider value={{canvasTools,setCanvasTools}}>
      
      <Leftpanel canvasTools={canvasTools} despatch={despatch} setCanvasTools={setCanvasTools} course={props.course} user={props.user} />
      <RightPanel canvasTools={canvasTools} setCanvasTools={setCanvasTools} course={props.course}  />
      </studioContext.Provider>
    
    </div>
  );
}

export default Main;
