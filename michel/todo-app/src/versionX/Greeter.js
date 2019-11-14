import React from 'react';
import DateTime from './DateTime';

function Greeter(props) {
    var date = new Date();
    return (
        <header>
            <h2>Hallo {props.Name}</h2>
            <p>Heute ist der <DateTime /></p>
        </header>
    );
}

export default Greeter;