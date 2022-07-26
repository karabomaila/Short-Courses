import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tool from "./Tool";
import { tools } from "./tools";

export default function MenuAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: '#007377' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.toggleDrawer("left", true)}
            data-testid="showPanel"
          >
            <MenuIcon />
          </IconButton>
          <p style ={{color: 'white', fontWeight: 'bold', margin: 10, fontSize: 28}}>STUDIO</p>

          {/* <Stack direction="row" spacing={7}>
            {tools.map((tool, index) => {
              return <Tool key={index} tool={tool} />;
            })}
          </Stack> */}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
