import React, { createContext, useState } from "react";

export const CourseContext = createContext();

function CourseContextProvider(props){

    const [slideData, setSlideData] = useState({});
    const [courseData, setCourseData] = useState({});

    return(
        <CourseContext.Provider value={{slideData, setSlideData, courseData, setCourseData}}>
            {props.children}
        </CourseContext.Provider>
    );
}

export default CourseContextProvider;

