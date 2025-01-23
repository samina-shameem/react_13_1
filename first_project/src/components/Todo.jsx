//import React from 'react'
import "./CSS/Todo.css";
const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-header">TO-DO List</div>
      <div className="todo-add">
        <input type="text" placeholder="Add Your Task" className="todo-input" />
        <div className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        
      </div>
    </div>
  );
};

export default Todo;
