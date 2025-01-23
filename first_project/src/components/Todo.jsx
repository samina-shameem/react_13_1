//import React from 'react'
import { useRef, useState } from "react";
import "./CSS/Todo.css";
const Todo = () => {
    const[todos,setTodos]=useState([]);
    const inputRef=useRef(null);
    const add=() =>{
     setTodos([...todos,{}])
    }

  return (
    <div className="todo">
      <div className="todo-header">TO-DO List</div>
      <div className="todo-add">
        <input ref={inputRef}  type="text" placeholder="Add Your Task" className="todo-input" />
        <div onClick={()=>{add()}}className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        
      </div>
    </div>
  );
};

export default Todo;
