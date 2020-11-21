import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,  { useState } from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App () {
  const [activity, setActivity] = useState("");
  return (
    <div className="App">
      <Header />
      <TodoForm setActivity={setActivity} />
      <TodoList activity={activity} />
    </div>
  );
}

export default App;
