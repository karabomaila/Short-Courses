import React from 'react';
import no_data from './no_data.webp'
import CourseNotesCard from './CourseNotesCard';

const ShowNotes = (props)=>{
    if(!props.flag){
        return(
            <div style = {ListStyle}>
            {props.notes.map((item, index) =>
                 <CourseNotesCard 
                 key = {index}
                 data = {item}
                 setInfo = {props.setInfo}
                 setView = {props.setView}/>
            )}
    </div>
        );
    }
    return(
       <div>
           <img src = {no_data} alt = {'opps'} width = {300} height = {300}/>
           <p style = {{alignSelf: 'center', fontSize: 44, margin: 18}}>Sorry No Data Found...</p>
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