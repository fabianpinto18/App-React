import React from "react";
import './TodoItem.css'
function TodoItem(props) {
    
    
  
    return(
        <li className="todoItem">
            <span className={`icon icon--check ${props.complete && 'icon-check--active'}`}
            onClick={props.onCompleteTodo}
            >
            ✔
            </span>
            <p className={`todoItem-p ${props.complete && 'todoItem-p--complete'}`}
            
            >
            {props.text}
            </p>
            <span className="icon icon-delete"
            onClick={props.onDeleteTodo}
            >
            Ｘ
            </span>
        </li>
    );
}
export {TodoItem}