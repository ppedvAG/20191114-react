import React from 'react';
import DateTime from './DateTime';

function Greeter(props) {
    return (
        <header>
            <h2>Hallo {props.Name}</h2>
            <p>Heute ist der <DateTime /></p>
        </header>
    );
}

export default Greeter;