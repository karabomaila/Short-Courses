import React from 'react';
import { useDrag } from 'react-dnd';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LinearScaleIcon from '@mui/icons-material/LinearScale';


const Dragable = (props)=>{
    const [{isDragging}, drag] = useDrag(() =>({
        type: 'div',
        item: {id: props.id},
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    if(props.id === 'slider'){
        return(
            <div 
            ref = {drag}
            style = {ComponentStyle}>
            <LinearScaleIcon />
            Slider
            </div>
        );
    }
    if(props.id === 'radio'){
        return(
            <div ref = {drag} style = {ComponentStyle}>
                <RadioButtonCheckedIcon />
                Radio Button
            </div>);
    }
    if(props.id === 'box'){
        return(
            <div ref = {drag} style = {ComponentStyle}>
                <CheckBoxIcon />
                Checkbox
            </div>);
    }
   
}


const ComponentStyle = {
    display: 'flex',
    background: 'white',
    padding: 5,
    margin: 12,
    borderRadius: 20,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    width: '50%'
}

export default Dragable;