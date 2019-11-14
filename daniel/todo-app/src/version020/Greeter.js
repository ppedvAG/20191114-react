import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greeter() {
  return (
    <div>Hallo, es ist {new Date().toLocaleDateString()}</div>
  );
}
 

export default Greeter;
