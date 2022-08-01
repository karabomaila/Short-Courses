import React from 'react';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

const Chapter = (props)=>{

    const onView = ()=>{
        props.setGetIndex(props.index);
        props.setView(true);
    }


    return(
        <div style = {MainStyle} onClick = {onView} data-testid = 'chap-div'>
            <div style = {IconStyle}>
            <p style = {{margin: 0, fontSize: 50, fontWeight: 'bold', color: "#007377"}}>{props.index + 1}</p>
            </div>
            <div style = {RightStyle}>
                <p style = {ChapterNameStyle}>{props.data.name}</p>
                <p style = {ChapterDurationStyle}>Duration</p>
            </div>
        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 12,
    width: '320px',
    height: '150px',
    marginBottom: 18,
    marginRight: 22,
    cursor: 'pointer',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const IconStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#007377',
    width: '120px',
    height: '120px',
    borderRadius: '100%'
}

const RightStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const ChapterNameStyle = {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#111417',
    margin: 0,
    marginTop: 8,
}

const ChapterDurationStyle = {
    //fontWeight: 'bold',
    margin: 0,
    marginTop: 3,
    color: '#111417',
}

export default Chapter;