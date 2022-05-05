import './App.css';
import Home from './components/home';
import Enrolled from './components/Enrolledpage';
import MyCourses from './components/MyCoursesPage';
import Siderbar from './components/Siderbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Course from './components/Course';
import { Grid } from '@mui/material';
import Explore from './components/Explore';
import CreateCourseAgain from './components/CreateCourseAgain';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MyPortfolio from './components/myProfile/MyPortfolio';
import Useless from './components/Feedback/useless';
import React from "react";



function App() {
    return (
        <DndProvider backend={HTML5Backend}>
        <div className= "App" >
       
        <BrowserRouter>
         
          
          <Routes>
          {/* <Route path='/'exact element={ <Homepage/ >}/> */}
          <Route path='/'exact element={ <Explore/> }/>
           <Route path='/Enrolled' element={<Enrolled/>}/>
           <Route path='/CreateCourse' element={<CreateCourseAgain/>}/>
           <Route path='/MyCourses' element={<MyCourses/>} />
           <Route path='/MyPortfolio' element={<MyPortfolio/>} />
           <Route path='/TagsDemo' element ={<Useless/>}/>
           <Route path='/Slides/:id' element={
                     <Siderbar/>
              
                } />
           
           
          </Routes>
         
      
     
       </BrowserRouter>
       

        </div>
        </DndProvider>
    );
}

export default App;