import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
import React, { useEffect } from "react";
import { Tooltip } from "@mui/material";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");


const toolStyle = {
  cursor: "move",
  color: "white",
  padding: "3px",
  margin: "5px",
  textAlign: "center",
  zIndex: 2,
  display: "flex",
  flexDirection: "row",
};

function Tool({ tool }) {
  useEffect(() => {


    console.log("sure")
    $(`#${tool.draggable}`).draggable({
      containment: $("#canvas"),
      helper: "clone",
    });
  }, [$]);

  

  return (
    <h3 style={toolStyle} id={tool.draggable}  className={tool.className} data-testid={tool.name+"test"}>
      <Tooltip title={tool.name}>{tool.icon}</Tooltip>
      
    </h3>
  );
}

export default Tool;
