import React from 'react';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import Checkbox from '@mui/material/Checkbox';
import {useDrop} from 'react-dnd';
import Dragable from './Dragable';

const CreateNewForm = (props)=>{
    const [droppedItems, setDroppedItems] = useState([]);
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
        console.log(id);
    }

    return(
        <div style = {HomeStyle}>
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
                        <Checkbox sx = {{color: "teal"}} defaultChecked/>
                        <p style = {TextStyle}>Include Feedback</p>
                    </div>
                </div>

                <div ref = {drop} style = {RightPanel}>
                    {droppedItems.map((item, index) =>
                        <p>item</p>
                    )}
                </div>
            </div>
           

            <Fab variant="extended" style = {FabStyle}>
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