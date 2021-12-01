import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import '../TodoCounter/index.js';
import './TodoCounter.css'

function TodoCounter (){
    const {totalTodos, completeTodos} = React.useContext(TodoContext);    
return(
    <h2 className="todoCounter">Has completado { completeTodos} de  {totalTodos}  TODOs</h2>
);
}
export {TodoCounter}