import React from 'react';
import ReactDOM from 'react-dom';
import './v00outOfTheBox/index.css';
// import App from './version070/App';
// import App from './versionCurrent/App';
// import App from './v80/App';
import App from './v90Redux/App';
import todosReducer from './v90Redux/todosReducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


// reducer wird nur übergeben, ausgeführt erst mit dispatch
const store = createStore(todosReducer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root')
);


