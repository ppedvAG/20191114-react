import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Greeter from './Greeter';
import Rating from './Rating';

function App() {
    return (        
        <div>
            
        <Greeter Name="Michel"/>
        <Rating NumberOfStars={8} />
        </div>
        )
        ;
}
export default App;