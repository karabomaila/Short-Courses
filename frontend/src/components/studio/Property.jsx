import React from "react";
import { Typography, Paper,Stack } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const mainDiv = {
  padding: "3px",
  display:"grid",
  gridTempleteColomn: "auto auto",
  padding: "10px",
  backgroundColor: "white",
  borderRadius: "10px"
  
};

function Property(props) {
  const notProperty = ["_id", "type","content"];
  

  const handleOnChange = (value,name) => {
    console.log("sabelo");
    props.changePropertyValue(name,value);
  };

  

  

  const handleChange = (event,name) => {
    props.setAge(event.target.value);
    props.changePropertyValue(name,event.target.value);
  };

  return (
    <Stack style={mainDiv} direction="column">
      {Object.entries(props.item).map((item, index) => {
        if (notProperty.indexOf(item[0]) === -1) {
          if (item[0] === "position") {
            return (
              <div key={index} style={{display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ marginRight: "10px" }}>x</Typography>
                  <textarea
                    id="x"
                    data-testid="x"
                    rows="1"
                    type='number'
                    value={props.item.position.left}
                    style={{ resize: "none", width: "auto" }}
                    onChange={(event)=>{
                      event.preventDefault();
                      handleOnChange({...props.item.position,left:parseFloat(event.target.value)},item[0]);
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ marginRight: "10px" }}>y</Typography>
                  <textarea
                    id="y"
                    data-testid="y"
                    rows="1"
                    type='number'
                    value={props.item.position.top}
                    style={{ resize: "none", width: "auto" }}
                    onChange={(event)=>{
                      event.preventDefault();
                      handleOnChange({...props.item.position,top:parseFloat(event.target.value)},item[0])
                    }}
                  />
                </div>
              </div>
            );
          } else if (item[0] === "fontSize") {
            return (
              <div
                key={index}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Box >
                  <FormControl variant="standard"  size="small" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">{item[0]}</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={props.age}
                      label="fontSize"
                      onChange={(event)=>{
                        event.preventDefault();
                        handleChange(event,item[0])
                      }}
                      
                    >
                      {[10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40].map((size,index)=>{
                        return (<MenuItem value={size} key={index}>{size}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            );
          } else {
            // temp.push({ name: key, value: value })
            // console.log(props.item);
            return (
              
              <div
                key={index}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Typography style={{ marginRight: "10px" }}>
                  {item[0]}
                </Typography>
                <textarea
                
                  id={item[0]}
                  rows="1"
                  data-testid={item[0]}
                  
                  value={item[1]}
                  style={{ resize: "none", width: "auto" }}
                  onChange={(event)=>{
                    event.preventDefault();
                    handleOnChange(event.target.value,item[0])
                  }}
                />
              </div>
            );
          }
        }
      })}
    </Stack>
  );
}

export default Property;
