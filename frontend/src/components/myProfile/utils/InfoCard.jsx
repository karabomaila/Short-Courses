import React from 'react';

const InfoCard = (props)=>{
    return(
        <div style = {MainStyle}>
            <div style = {ImageStyle}>
                <img src = {props.image} height = '100%' width = '100%'/>
            </div>
            <div style = {{padding: 12, fontWeight: 'bold', color: '#0645AD', textDecoration: 'underline'}}>
                {props.title}
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'row',
    //width: '200px',
    //minWidth: '200px',
    height: '50px',
    margin: 12,
    alignItems: 'center',
    borderStyle: 'groove',
    borderColor: '#003b5c',
    borderRadius: 9,
    //boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const ImageStyle = {
    height: '100%',
    //width: '100%',
    padding: 12

}

export default InfoCard;