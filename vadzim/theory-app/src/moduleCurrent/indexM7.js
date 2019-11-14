import React from 'react';
import ReactDOM from 'react-dom';
import './module000/index.css';

import * as serviceWorker from './serviceWorker';

// import App from './module000/App';
import App  from './moduleCurrent/App';

let root = document.getElementById('root');


ReactDOM.render(<App text="textVonIndexjs" />, root);

function unmount() {
    ReactDOM.unmountComponentAtNode(root);
}

window.setTimeout(unmount, 2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();