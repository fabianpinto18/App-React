import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import './App.css';
import { TodoForm } from "../TodoForm";
 function AppUi() {
   const {
   error, 
   loading, 
   searchedTodos, 
   todoComplete, 
   deleteTodo,
   openModal,
   setOpenModal,
   }= React.useContext(TodoContext);

     return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
      <TodoList>
        {error && <p>Desesperate, hubo no error...</p>}
        {loading && <p>Estamos Cargando, un momento por favor...</p> }
        {(!loading && !searchedTodos.length) && <p className="primerTodo">¡Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            complete={todo.complete} 
            onCompleteTodo={()=>todoComplete(todo.text)}
            onDeleteTodo={()=>deleteTodo(todo.text)}
            />  
        ))} 
      </TodoList>
        {!!openModal && (<Modal>
         <TodoForm/>
        </Modal>
        )}
        <TodoCreateButton
          setOpenModal={setOpenModal}
        />
        </React.Fragment>
     )
 }
 export {AppUi};