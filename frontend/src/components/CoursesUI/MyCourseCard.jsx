import Actions from "./Actions"
import React from 'react';
import wits from './wits.png'
import ActionDel from "./ActionDel"

const MyCourseCard = ()=>{
    return(
        <div style = {MainStyle}>
            <div style = {ImageStyle}>
                <img src = {wits} width = '100%' height = '100%'/>
            </div>
            <div style = {TitleStyle}>Course Name</div>
            <div style = {ActionStyle}>
                <Actions title = 'View'/>
                <Actions title = 'Edit'/>
                <Actions title = 'Info'/>
                <ActionDel title = 'Del'/>
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '330px',
    minWidth: '330px',
    //background: 'blue',
    alignSelf: 'center',
    height: '410px',
    //minHeight: '50%'
    borderRadius: 9,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const ImageStyle = {
    display:'flex',
    height: '78%',
    padding: 4
    //background: 'red'
}

const TitleStyle = {
    fontWeight: 'bold',
    margin: 5
}

const ActionStyle = {
    display: 'flex',
    justifyContent: 'center'

}

export default MyCourseCard;