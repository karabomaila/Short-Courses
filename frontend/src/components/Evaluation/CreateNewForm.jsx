import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import Checkbox from '@mui/material/Checkbox';
import {useDrop} from 'react-dnd';
import Dragable from './Dragable';
import DropDialog from './DropDialog';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import empty from './drag_empty.webp';
import EasyView from './EasyView';
import ViewForm from './ViewForm';

const CreateNewForm = (props)=>{
    const navigate = useNavigate();
    const [droppedItems, setDroppedItems] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [checked, setChecked] = useState(true);
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('');
    const list = ['slider', 'radio', 'box'];

    const [{isOver}, drop] = useDrop(() =>({
        accept: 'div',
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const onBack = ()=>{
        props.setCreate(false);
    }

    const onDrop = (id)=>{
        setType(id);
        setOpenDialog(true);
    }

    const onView = ()=>{
        setVisible(!visible);
    }

    const onCheck = (event)=>{
        setChecked(!checked, event.target.checked);
    }

    const onFinish = ()=>{
        // call the backend to post data...
        console.log(droppedItems);
        //navigate('/MyCourses');
    }

    return(
        <div data-testid = 'most-complicated-div' style = {HomeStyle}>
            
            <div style={Panel}>
                <div style = {LeftPanel}>
                <div style = {nav}>
                <ArrowBackIcon sx = {{color: 'white', marginLeft: 2}} onClick = {onBack}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 11}}>Components</p>
                </div>
                    {list.map((item, index) =>
                        <Dragable 
                        key = {index}
                        id = {item}/>
                    )}
                    <div style = {{display: 'flex'}}>
                        <Checkbox checked={checked} 
                        sx = {{color: "teal"}} 
                        onChange = {onCheck}/>
                        <p style = {TextStyle}>Include Feedback</p>
                    </div>
                </div>

                {droppedItems.length > 0 && !visible &&
                     <div ref = {drop} style = {RightPanel}>
                     {droppedItems.map((item, index) =>
                         <EasyView 
                            key = {index}
                            item = {item}
                         />
                     )}
                 </div>
                 
                }

                {droppedItems.length == 0 &&
                    <div ref = {drop} style = {RRPanel}>
                    <img src = {empty} alt = {'drag and drop'} width = '300px' height= '300px' />
                    <p style = {TStyle}>Drag and Drop Components on the Left</p>
                </div>
                }

            {visible &&
                <div ref ={drop} style = {ViewPanel}>
                    <ViewForm data = {droppedItems} 
                    checked = {checked} 
                    courseName = {props.courseName}/>
                </div>
                
            }
            </div>


            <DropDialog open = {openDialog} 
            type = {type}
            setOpenDialog = {setOpenDialog} 
            setDroppedItems = {setDroppedItems} 
            droppedItems = {droppedItems}/>

            {droppedItems.length > 0 && !visible &&
                 <Fab variant="extended" style = {FFStyle} onClick = {onView}>
                    <VisibilityIcon sx={{ mr: 1, color: '#007377'}} />
                    View
                </Fab>
            }

            {visible > 0 &&
                 <Fab variant="extended" style = {FFStyle} onClick = {onView}>
                    <VisibilityOffIcon sx={{ mr: 1, color: '#007377'}} />
                    Hide
                </Fab>
            }
           
            <Fab variant="extended" style = {FabStyle} onClick = {onFinish}>
                 <DoneIcon sx={{ mr: 1, color: '#007377'}} />
                 Submit
            </Fab>
        </div>
    );
}

const HomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    
}

const FabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
}

const RightPanel ={
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    flex: 3.5,
    marginRight: 3,
    padding: 9,
    borderStyle:'ridge',
    marginLeft: 12,
    marginRight: 12
}

const ViewPanel ={
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    flex: 3.5,
    marginRight: 3,
    padding: 9,
    marginLeft: 12,
    marginRight: 12
}

const RRPanel ={
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    flex: 3.5,
    marginRight: 3,
    padding: 9,
    borderStyle:'ridge',
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'center', 
    alignItems: 'center'
}

const LeftPanel ={
    display: 'flex',
    flexDirection: 'column',
    background: '#edf4f5',
    borderRadius: 12,
    flex: 1,
    height: '35vh',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const Panel ={
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
    //width: '100%',
    height: '80vh'
}

const TextStyle ={
    marginTop: 9,
    marginBottom: 1
}

const TStyle ={
    marginTop: 9,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'teal',
    fontFamily: 'arial'
}

const FFStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 85,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
}

const nav = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#007377',
    marginBottom: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
}

export default CreateNewForm;