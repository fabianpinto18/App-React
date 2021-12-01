import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue,setNewTodoValue] =React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const onChange = (event) =>{
       setNewTodoValue( event.target.value);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }
        
    
    return(
        <form onSubmit={onSubmit}>
            <label id="titulo">Escribe tu nuevo TODO</label>
            <textarea className="text-Area-Form" value={newTodoValue} onChange={onChange} placeholder="Escribir TODO"></textarea>
            <div className="TodoForm-ButtonContainer">
                <button className="TodoForm-Button TodoForm-Button-Cancel" type={"button"} onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-Button TodoForm-Button-Add" type={"submit"}>Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};