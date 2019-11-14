import React from 'react';
import logo from './logo.svg';
import Greeter from "./Greeter"
import Rating from './Rating';

function App() {
  return (
    <div>
  <Greeter inputName="Daniel"/>
  <Rating anzahl={5}></Rating>
  </div>
  );
}

export default App;
