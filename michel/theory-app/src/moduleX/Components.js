import React from 'react';

export function AllComponents() {
    const text = "Alle Komponenten";
    return (
        <div>
            <p>{text} geben irgendetwas zurück - return().</p>
            <p>{text} werden groß geschrieben (Konvention).</p>
            <p>{text} können in React wie HTML-Elemente verwendet werden.</p>
            <p>{text} erhalten Properties von aufrufender Stelle.</p>
        </div>
    );
}

export function FuncComponent(props)
{
    return (
        <div>
            <h2>Component with Properties</h2>
            <p>Übergebener Wert: "{props.content}"</p>
        </div>
    );
}