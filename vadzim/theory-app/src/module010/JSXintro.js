import React from 'react';

export function JSXExpression() {
    return (
        <h2>Hallo, ich heiße Vadzim und bin {2019 - 1984} Jahre alt.</h2>
    )
}

// funktioniert es hier ohne default wegen dem import * ?
// wenn kein default, dann { App } oder import * as

export function JSXManyEls() {
    return (
        <header>
            <h2>Hallo, ich heiße Vadzim</h2>
            <p>und bin {2019 - 1984} Jahre alt.</p>
        </header>
    )
}

export function JSXrendersNoBooleans() {
    const isWinter = false;
    return (
        <header>
            <h2>Hallo, ich heiße Vadzim</h2>
            <p>und bin {2019 - 1984} Jahre alt.</p>
            <p>Ist jetzt Winter? - {isWinter}!</p>
            <p>Ist jetzt Winter? - {isWinter ? 'true' : 'false'}!</p>
        </header>
    )
}

export function JSXElsAreObjects() {
    const el = <header>
        <h2>Hallo, ich heiße Vadzim</h2>
        <p>und bin {2019 - 1984} Jahre alt.</p>
    </header>
    // return el;
    return typeof el;
}

export function JSXvsCreateEl() {
    const heading = React.createElement('h2', null, 'Hallo, ich heiße Vadzim');
    return (
        <header>
            {heading}
            <p>und bin {2019 - 1984} Jahre alt.</p>
        </header>
    );

}



