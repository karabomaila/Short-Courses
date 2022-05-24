import React from 'react';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

const Chapter = (props)=>{

    let iconColour;

    if(props.index % 2 == 0){
        iconColour = '#daa520';
    }else{
        iconColour = '#003b5c';
    }

    const onView = ()=>{
        props.setGetIndex(props.index);
        props.setView(true);
    }


    return(
        <div style = {MainStyle} onClick = {onView}>
            <div style = {IconStyle}>
                <ArtTrackIcon fontSize='large' sx = {{color: iconColour, }}/>
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
    borderRadius: 12,
    width: '40%',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const IconStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
}

const RightStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const ChapterNameStyle = {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
}

const ChapterDurationStyle = {
    //fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
}

export default Chapter;