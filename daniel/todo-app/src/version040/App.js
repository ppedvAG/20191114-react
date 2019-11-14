import React from 'react';
import logo from './logo.svg';
import Greeter from "./Greeter"
import Rating from './Rating';
import TodoList from './TodoList';

function App() {
  return (
    <div>
  <Greeter inputName="Daniel"/>
  <Rating anzahl={5}></Rating>
  <TodoList></TodoList>
  </div>
  );
}

export default App;
