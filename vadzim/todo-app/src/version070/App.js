import React from "react";
import Greeter from "./Greeter";
import Rating from "./Rating";
import Todos from './Todos';
import './App.css';

function App() {
  return (
    <div>
      <Greeter />
      <Rating stars={5} />
      <Todos />
    </div>
  );
}

export default App;
