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
  zIndex: 9,
  display: "flex",
  flexDirection: "row",

};

function Tool({ tool }) {
  useEffect(() => {

    $(`#${tool.draggable}`).draggable({
      helper: "clone",
      opacity: 0.7
    });
  }, [$]);

  

  return (
    <h1 style={toolStyle} id={tool.draggable}  className={tool.className} data-testid={tool.name+"test"}>
      <Tooltip title={tool.name}>{tool.icon}</Tooltip>
      
    </h1>
  );
}

export default Tool;
