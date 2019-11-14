import React from 'react';


function Greeter() {
    var date = new Date();
    return (
        <header>
            <h2>Hallo Michel</h2>
            <p>Heute ist der {date.toLocaleDateString()}</p>
        </header>
    );
}

export default Greeter;