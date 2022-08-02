import React from 'react';
import no_data from './no_data.webp'
import CourseNotesCard from './CourseNotesCard';

const ShowNotes = (props)=>{

    return(
        <div data-testid = 'snts-div' style = {ListStyle}>
        {props.notes.map((item, index) =>
                <CourseNotesCard 
                key = {index}
                data = {item}
               />
        )}
        </div>
        );
   
}

const ListStyle ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 12
}

export default ShowNotes;