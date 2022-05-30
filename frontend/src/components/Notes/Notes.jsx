import React from 'react'
import CourseNotesCard from './CourseNotesCard';

const Notes =()=>{
    return(
        <div style = {MainStyle}>
            Notes

            <div style = {ListStyle}>
                <CourseNotesCard/>
                <CourseNotesCard/>
                <CourseNotesCard/>
                <CourseNotesCard/>
                <CourseNotesCard/>
                <CourseNotesCard/>
            </div>`
           
        </div>
    )
}
const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5',
    height: '100vh',
    overflowY: 'scroll'
}

const ListStyle ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 12
}


export default Notes;