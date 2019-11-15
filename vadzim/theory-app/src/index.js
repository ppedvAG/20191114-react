import React from 'react';
import ReactDOM from 'react-dom';
import './module000/index.css';
// ohne Namensänderung
// import { Banana } from './App';
// mit Namensänderung
// import * as serviceWorker from './serviceWorker';

// 8. 
import App from './moduleCurrent/App';
// import App from './moduleCurrent/AppWithClass';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
