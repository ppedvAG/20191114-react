import React from 'react';

export default function MyComponent() {
    const someText = 'Alle Komponenten';
    return (
        <div>
            <p>{someText} geben irgendwas zurück - return()</p>
            <p>{someText} werden groß geschrieben.</p>
            <p>{someText} können in React wie (React/HTML)Elemente verwendet werden.</p>
            <p>{someText} bekommen props von der aufrufenden Stelle.</p>
        </div>
    )
}