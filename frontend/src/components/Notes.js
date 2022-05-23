import Form from "./form";
import Header from "./header";
import  './Notes.css'
import { useState } from "react";
import NoteList from "./NoteList";
import React from "react";



function Note(){
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    return(
        <div className="container" data-testid="container">
          <div className="app-wrapper"data-testid="app-wrapper">
             <div  data-testid="header">
               <Header/>
             </div>

              <div  data-testid="form">
                <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos} 
               
                />
              </div>

              <div data-testid="list">
                  <NoteList todos={todos} setTodos={setTodos} />
              </div>

          </div>

        </div>
    )
}
export default Note;