import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Property from "./Property";
import List from "@mui/material/List";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { ListItemIcon, IconButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import TitleIcon from "@mui/icons-material/Title";
import renderTools from "./renderTools";
import { tools } from "./tools"
import Tool from "./Tool";

const useActiveElement = () => {
  const [active, setActive] = React.useState(document.activeElement);

  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  };

  React.useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  return active;
};

export default function SimpleAccordion(props) {
  const [properties, setProperties] = React.useState([
    {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  ]);

  const [currToolIndex, setCurrentToolIndex] = React.useState(0);
  const [age, setAge] = React.useState('');

  const deleteTool = (id) => {

    let NewTools = props.canvasTools.filter((item) => item._id !== id);
    props.setCanvasTools(NewTools);
    renderTools(NewTools);

  }

  const getIcon = (type) => {


    return (tools.filter(item => item.className === type)[0].icon)

  }

  const focusedElement = useActiveElement();

  React.useEffect(() => {
    if (focusedElement) {
      //  console.log(focusedElement);
      props.canvasTools.map((item, index) => {
        if (focusedElement.id !== undefined) {
          if (item._id == parseInt(focusedElement.id) + 1000)
            setProperties([item]);
          // console.log(item.fontSize!==undefined ? item.fontSize:'')
          // setAge(item.fontSize!==undefined ? item.fontSize:'')
        }
      });
    }
    // console.log(focusedElement);
  }, [focusedElement, setProperties, setAge]);

  const changePropertyValue = (name, value) => {
    let temp = [];

    props.canvasTools.map((tool, index) => {
      if (index === currToolIndex) {
        // console.log(({...tool,fontSize: value}));
        tool[name] = value;
        temp.push(tool);
      } else {
        temp.push(tool);
      }
    });

    props.setCanvasTools(temp);
    renderTools(temp);
  };

  const list = () => (
    <List style={{ maxHeight: "250px", overflowY: "auto" }}>
      {props.canvasTools.map((item, index) => {
        return (
          <div key={index}>
            <ListItem
              // key={index}
              // disableRipple={true}

              data-testid={index.toString() + item.type}
              button
              secondaryAction={<IconButton
                onClick={(event) => {
                  event.preventDefault();
                  deleteTool(item._id);
                }}
              >
                <ClearIcon />
              </IconButton>}

              key={index}
              id={index.toString() + "id"}
              style={{ backgroundColor: "white" }}
              onMouseOver={(event, m) => {
                document.getElementById(item._id - 1000).click();
                // document.getElementById(item._id - 1000).style.cssText+="border:6px solid red;"


              }}
              onClick={(e) => {
                // e.preventDefault();
                document.getElementById(item._id - 1000).click();
                setCurrentToolIndex(index);
                setProperties([item]);
                // console.log([item])
                // console.log(document.getElementsByTagName("textarea"));
              }}
            >
              <ListItemIcon>
                {getIcon(item.type)}
              </ListItemIcon>
              <ListItemText primary={item.type} data-testid={index.toString() + item.type + "text"} style={{ color: "#000000" }} />

            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );

  return (
    <div >
      <Accordion style={{ backgroundColor: "#f2f2f2" }} data-testid="propertiesAcc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pane1a-content"
          id="panel1a-header"
        >
          <Typography data-testid="firstAcc">Properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ maxHeight: "120px", overflowY: 'auto' }}>
            {properties.map((item, index) => {
              return (
                <Property
                  item={item}
                  changePropertyValue={changePropertyValue}
                  age={age}
                  setAge={setAge}
                />
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#f2f2f2" }} data-testid="componentsAcc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography data-testid="secondAcc">Components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>{list()}</div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ backgroundColor: "#f2f2f2" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography data-testid="thirdAcc">Templates</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion style={{ backgroundColor: "#f2f2f2" }} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >

          <Typography data-testid="4thAcc">Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={7}>
            {tools.map((tool, index) => {
              return <Tool key={index} tool={tool} />;
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
