//import React from 'react'
import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no,display,text}) => {
   const toggle=() => {
    let data= JSON.parse(localStorage.getItem("todos"));
   }

  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        
      {display===""?<img src={not_tick} alt=""/>:<img src={tick} alt=""/>}
        
        <div className='todoitems-text'>{text}</div>
      </div>
      <img  className='todoitems-cross-icon' src={cross} alt=''/>
    </div>
  )
}

export default TodoItems
