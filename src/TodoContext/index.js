
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()
function TodoProvider(props) {
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue,setSearchValue] = React.useState('');
      
      const [openModal,setOpenModal]= React.useState(false);

      const completeTodos = todos.filter(todo => !!todo.complete).length;
    
      const totalTodos = todos.length;
    
      let searchedTodos = [];
      if (!searchValue >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo =>{
          const todotext = todo. text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todotext.includes(searchText);
        });
      }
      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          complete: false,
          text
        });
        saveTodos(newTodos);
        } 
      const todoComplete = (text) =>{
    
        const todoIndex = todos.findIndex (todo => todo.text === text)
    
        const newTodos = [...todos];
        newTodos[todoIndex].complete=true;
        saveTodos(newTodos);
        } 
        const deleteTodo =(text) =>{
    
          const todoIndex = todos.findIndex (todo => todo.text === text)
    
          const newTodos = [...todos];
    
          newTodos.splice(todoIndex,1);
          saveTodos(newTodos);
          
        }

    return( 
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completeTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            todoComplete,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>    
    );
}
export {TodoContext, TodoProvider};

