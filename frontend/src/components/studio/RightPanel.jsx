import React from "react";
import { Typography } from "@mui/material";
import RightPanelAccordion from "./RightPanelAccordion";

const mainDiv = {
  position: "absolute",
  backgroundColor: '#f4fdff',
  left: "75%",
  right:'0px',
  bottom: "0px",
  top: "0px",
  resize: true,
  overflowY: "auto",
  textAlign: "center",
  padding: "10px",
};

function RightPanel(props) {
  return (
    <div style={mainDiv}>
      <RightPanelAccordion canvasTools={props.canvasTools} setCanvasTools={props.setCanvasTools} />
    </div>
  );
}

export default RightPanel;
