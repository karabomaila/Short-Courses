import './App.css';
import Enrolled from './components/Enrolledpage';
import MyCourses from './components/MyCoursesPage';
import Siderbar from './components/Siderbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Explore from './components/Explore';
import CreateCourseAgain from './components/CreateCourseAgain';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MyPortfolio from './components/myProfile/MyPortfolio';
import FinHome from './components/CourseCentre/FinHome';
import React from "react";
import Main from './components/studio/Main'



function App() {
    return (
        
        <div>
       
        <BrowserRouter>
         
          
          <Routes>
          {/* <Route path='/'exact element={ <Homepage/ >}/> */}
          <Route path='/'exact element={ <Explore/> }/>
           <Route path='/Enrolled' element={<Enrolled/>}/>
           <Route path='/CreateCourse' element={<CreateCourseAgain/>}/>
           <Route path='/MyCourses' element={<MyCourses/>} />
           <Route path='/MyPortfolio' element={<MyPortfolio/>} />
           <Route path='/Studio' element={<Main/>} />
           <Route path='/CourseCentre' element={<FinHome/>}/>
           <Route path='/Slides/:id' element={
                     <Siderbar/>
              
                } />
           
           
          </Routes>
         
      
     
       </BrowserRouter>
       

        </div>
       
    );
}

export default App;