import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,  { useState } from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App () {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <Header />
      <div className="app-title">
        <h4> Benvenuto su Todo App </h4>
        <h6> Inserisci le attività da svolgere durante la giornata </h6>
      </div>
      <TodoForm items={items} setItems={setItems} />
      <TodoList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
