import React from 'react'
import { FcOk,FcEditImage } from "react-icons/fc";
import { FaTrashAlt} from "react-icons/fa";
function NoteList({todos,setTodos}) {
    const deleteNotes=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
  return (
    <div>
      {todos.map((todo)=>(
          <li className='list-item' key={todo.id}>
              <input
              type='text'
              value={todo.title}
              className="list"
              onChange={(event)=>event.preventDefault()}
              />
              <div className='btn'>
                
                  <button className='button-delete task-button'
                  onClick={()=> deleteNotes(todo)}
                  >
                  <FaTrashAlt/>
                  </button>
              </div>

          </li>
      ))}
    </div>
  )
}

export default NoteList