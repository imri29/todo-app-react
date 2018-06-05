import React from 'react';
import "./todo-item.css"

const TodoItem = (props) => {
 return (
   <li className="todo-item" onClick={props.onClick}>
     {props.name}
   </li>
 )
};

export default TodoItem;

//put x next to the todo item