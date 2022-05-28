import Action from "./utils/Action.jsx";
import Profile from "./utils/user.png";
import React from "react";


const Menu = (props) => {
    return(
        <div style = {MenuStyle} data-testid = "men-div">
            <img src = {Profile} width = {100} height = {100} style = {ProfileSyle}/>
            <div style = {UserNameStyle} data-testid = "men-name">{props.name}</div>
            <div style = {AboutCourses}>
                <div style = {CourseTag}>MyCourses 12</div>
                <div style = {CourseTag}>Enrolled 8</div>
            </div >
            <Action title = 'Expose View' 
            setView = {props.setView} 
            click = {'ExposeView'}/>
            <Action title = 'Personality Test'
            setView = {props.setView} 
            click = {'PersonalityTest'}/>
            <Action title = 'MyCourses' 
            setView = {props.setView} 
            click = {'MyCourses'}/>
            <Action title = 'Enrolled' 
            setView = {props.setView} 
            click = {'Enrolled'}/>
            
        </div>
    )
}

const MenuStyle = {
    width: '100%',
    display: 'flex',
    background: '#007377',
    alignItems: 'center',
    flexDirection: 'column'
}

const ProfileSyle = {
    margin: 15,
}

const UserNameStyle = {
    fontWeight: 'Bold',
    color: 'white'
}

const AboutCourses = {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    justifyContent: 'center',
    borderRadius: 14,
    margin: 12,
    padding: 12,
    width: "80%",
    color: 'white'
}

const CourseTag = {
    marginLeft: 15,
    marginRight: 15

}

export default Menu;