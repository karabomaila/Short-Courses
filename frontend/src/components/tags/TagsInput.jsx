import {TextField, Button} from '@mui/material';
import {useState} from 'react';
import ListTags from './ListTags';
import React from "react";

const TagsInput = (props)=>{
    const [input, setInput] = useState('');

    const onChange = event => {
        setInput(event.target.value);
    }

    const onAdd = ()=>{
        if(input != ''){
            let newTag = '';
            if(input[0] == '#'){
                newTag = input;
            }else{
                newTag = '#' + input;
            }
            // TO NOT DUPLICATE TAGS...
            let flag = true;
            for(let i = 0; i < props.tagArray.length; i++){
                if(props.tagArray[i] == newTag){
                    // DO NOT ADD
                    flag = false;
                    break;
                }
            }
            if(flag){
                props.tagArray.push(newTag);
            }
        setInput('');
        }
    }

    return(
        <div style = {{display: 'flex', flexDirection: 'column'}} data-testid = "tgs-div">
        <div style = {InputStyle}>
            <TextField value = {input} 
            onChange = {onChange} 
            id="newtag" 
            label="#NewTag" 
            fullWidth
            variant="standard" 
            inputProps={{ "data-testid": "test-textfield" }}
            />
            <div  onClick = {onAdd} 
            data-testid = 'test-tags-button'  
            style = {{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15, 
                padding: 2,
                borderRadius: "100%", 
                background: '#007377',
                width: 50, 
                height: 50}} >
            <p style = {{margin: 0, color: 'white', fontWeight: '700'}}>Add</p>
            </div>
        </div>
        <div>
            <ListTags tagArray = {props.tagArray}/>
        </div>
        </div>
    )
}

const InputStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12
    //background: 'red'
}

export default TagsInput;