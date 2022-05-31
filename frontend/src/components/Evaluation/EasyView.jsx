import React from 'react';


const EasyView = (props)=>{
    if(props.item.type === 'radio'){
        return(
            <div style = {MainStyle}>
                 <p style = {TypeStyle}>Radio Group</p>
                 <div style = {{display: 'flex'}}>
                     <p style = {{color: 'gray', marginLeft: 10, marginTop: 0, marginRight: 12}}>Content: </p>
                     <p style = {{color: 'gray', marginTop: 0, marginBottom: 0}}>{props.item.content}</p>
                 </div>
                 <div style = {{display: 'flex'}}>
                     <p style = {{color: 'gray', marginLeft: 10, marginTop: 0, marginRight: 12}}>Options: </p>
                     <p style = {{color: 'gray', marginTop: 0,}}>{props.item.array[0]}</p>
                     <p style = {{color: 'gray', marginTop: 0,}}>,</p>
                     <p style = {{color: 'gray', marginTop: 0,}}>{props.item.array[1]}</p>
                     <p style = {{color: 'gray', marginTop: 0,}}>,</p>
                     <p style = {{color: 'gray', marginTop: 0,}}>{props.item.array[2]}</p>
                 </div>
            </div>
        )
    }else if(props.item.type === 'box'){
        return(
            <div style = {MainStyle}>
                <p style = {TypeStyle}>Checkbox</p>
                <div style = {{display: 'flex'}}>
                     <p style = {{color: 'gray', marginLeft: 10, marginTop: 0, marginRight: 12}}>Content: </p>
                     <p style = {{color: 'gray', marginTop: 0,}}>{props.item.content}</p>
                 </div>
            </div>
        )
    }else{
        return(
            <div style = {MainStyle}>
                 <p style = {TypeStyle}>Slider</p>
                 <div style = {{display: 'flex'}}>
                     <p style = {{color: 'gray', marginLeft: 10, marginTop: 0, marginRight: 12}}>Content: </p>
                     <p style = {{color: 'gray', marginTop: 0,}}>{props.item.content}</p>
                 </div>
            </div>
        )
    }
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column'
}

const TypeStyle ={
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 0,
    fontWeight: 'bold',
    color: 'gray'
}

export default EasyView;