import React from 'react';

export function JSXExpression(){
    return (
        <h2>Hallo, ich heiße Daniel und bin {2019-1978} Jahre alt.</h2>
    )
}

export function JSXManEls(){
    return (
        <div>
            <h2>Hallo, ich heiße Daniel </h2>
            <p>und bin {2019-1978} Jahre alt.</p>
        </div>
    )
}

export function JSXrendersNoBooleans() {
    const isWinter = false;
    return (
        <header>
            <h2>Hallo, ich heiße Daniel</h2>
            <p>und bin {2019 - 1978} Jahre alt.</p>
            <p>Ist jetzt Winter? - {isWinter}!</p>
            <p>Ist jetzt Winter? - {isWinter?'true':'false'}!</p>
        </header>
    )
}

export function JSXElsAreObjects() {
    const el = <header>
        <h2>Hallo, ich heiße Daniel</h2>
        <p>und bin {2019 - 1978} Jahre alt.</p>
        </header>
    return el;
}