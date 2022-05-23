import React from 'react'
import {v4 as uuidv4} from "uuid"

function Form({input,setInput,todos,setTodos}){

    const onInputChange=(event)=>{
        setInput(event.target.value);
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos,{id: uuidv4(),title:input,completed:false}]);
        setInput("");
    }
  return (
    <form onSubmit={onFormSubmit} data-testid="big">
        <input type="text" 
        data-testid="inputbox"
        placeholder="Write notes..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
        />
        <button className='botton-add' type='submit' data-testid="addbtn">
            Add
        </button>
    </form>
  )
}

export default Form