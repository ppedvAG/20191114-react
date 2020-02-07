import React from 'react';

export default function MyComponentWProps(props) {
    const someText = 'Alle Komponenten';
    return (
        <div>
            <p>Hier kommt was von oben {props.gift1} </p>
            <p>Oh, es regnet Geschenke {props.gift2} </p>
            <p>Props Object {props.toString()}</p>
        </div>
    )
}