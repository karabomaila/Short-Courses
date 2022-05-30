import React from 'react';

const CourseNotesCard = (props)=>{

    const onView = ()=>{
        props.setView(true);
        props.setInfo(props.data);
    }

    return(
        <div style = {MainStyle} onClick = {onView}>
            <div style = {CircleStyle}>
                <span style = {SpanStyle}>
                    <p style = {{margin: 12, color: 'white', fontWeight: 'bold', fontSize: 40}}>{props.data.courseName[0]}</p>
                </span>
            </div>
            <p style = {NameStyle}>{props.data.courseName}</p>
        </div>
    );
}

const MainStyle={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 9,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    width: '200px',
    height: '300px',
    marginTop: 12,
    marginRight: 12,
    marginLeft: 12
}

const CircleStyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px'
}

const SpanStyle ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    background: '#007377'
}

const NameStyle ={
    margin: 4,
    fontWeight: 'bold'

}

export default CourseNotesCard;




