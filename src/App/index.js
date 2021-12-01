// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {TodoProvider} from '../TodoContext'
import { AppUi } from './AppUi';




function App() {
  
  return (
    <TodoProvider>
      <AppUi
      
      />
    </TodoProvider>
  );
}

export default App;
