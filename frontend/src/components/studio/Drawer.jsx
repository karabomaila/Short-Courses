import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={leftDiv}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <IconButton onClick={(event) => props.handletab(event, 0)}>
            <ArrowBack style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h4" data-testid="hearder">Course Content</Typography>
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

          
        </div>

        
        
      </div>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
