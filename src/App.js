import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,  { useState } from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  const [ inputText, setInputText ] = useState("");
  return (
    <div className="App">
      <Header />
      <TodoForm setInputText={setInputText} />
    </div>
  );
}

export default App;
