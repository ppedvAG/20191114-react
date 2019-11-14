import React from 'react';

export function JSXExpression() {
    return (
        <h2>Hallo, ich heiße Michel und bin {2019 - 1992} Jahre alt.</h2>
    );
}

export function JSXManyEls() {
    return (
        <header>
            <h2>Hallo, ich heiße Michel</h2>
            <p>und ich bin {2019 - 1992} Jahre alt.</p>
        </header>
    )
}

export function JSXrendersNoBooleans() {
    const isTrue = false;
    return (
        <div>
            <p>Wert von IsTrue = {isTrue}</p>
        </div>
    );
} 