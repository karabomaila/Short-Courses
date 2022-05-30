import './App.css';
import Enrolled from './components/Enrolledpage';
import MyCourses from './components/MyCoursesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Explore from './components/Explore';
import CreateCourseAgain from './components/CreateCourseAgain';
import MyPortfolio from './components/myProfile/MyPortfolio';
import React from "react";
import Hub from './components/LearningHub/Hub'
import Main from './components/studio/Main'
import PlusHome from './components/Studio++/PlusHome';



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
           <Route path='/Hub' element={<Hub/>}/>
           <Route path='/Studio++' element={<PlusHome/>}/>
           
          </Routes>
         
      
     
       </BrowserRouter>
       

        </div>
       
    );
}

export default App;