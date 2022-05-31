import React from 'react';
import {Button,Dialog, DialogTitle, DialogContent, DialogActions,} from '@mui/material';
import Input from './Input';
import { useState } from 'react';

const DropDialog =(props)=>{

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [state, setState] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    let items = new Array();

    const onClose = ()=>{
        items = props.droppedItems;
        if(props.type === 'radio'){
            if(state !== '' && option1 !== '' && option2 !== '' && option3 !== ''){
                items.push({type: 'radio', content: state, array: [option1, option2, option3]});
            }
        }else if(props.type === 'box'){
            if(state !== ''){
                items.push({type: 'box', content: state});
            }
           
        }else{
            if(state !== ''){
                items.push({type: 'slider', content: state});
            }
        }

        setState('');
        setOption1('');
        setOption2('');
        setOption3('');
        props.setDroppedItems(items);
        props.setOpenDialog(false);
    }

    return(
        <div>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
                <DialogTitle>
                    Component
                </DialogTitle>
                <DialogContent>
                    <Input 
                    type = {props.type}
                    state = {state}
                    setState = {setState}
                    option1 = {option1}
                    setOption1 = {setOption1}
                    option2 = {option2}
                    setOption2 = {setOption2}
                    option3 = {option3}
                    setOption3 = {setOption3}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick = {onClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>)
} 

export default DropDialog