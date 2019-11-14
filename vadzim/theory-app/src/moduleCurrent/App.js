import React from 'react';
import MyClassComp from './MyClassComp';
import MyClassCompWState from './MyClassCompWState';

export function App() {
  return (
    <div>
      <h1>Class Comp & State</h1>
      <h2>Ne simple Klassenkomponenten</h2>
      <MyClassComp text="Alle class-Komponenten"/>
      <hr/>
      <h2>Ne Klassenkomponente mit State</h2>
      <MyClassCompWState />
    </div>    
  );
}