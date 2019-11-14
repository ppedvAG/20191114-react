import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Greeter from './Greeter';
import Rating from './Rating';
import ToDoList from './ToDoList';

function App() {
    return (        
        <div>
            
        <Greeter Name="Michel"/>
        <ToDoList />
        </div>
        )
        ;
}
export default App;