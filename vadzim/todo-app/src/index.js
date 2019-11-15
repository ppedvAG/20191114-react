import React from 'react';
import ReactDOM from 'react-dom';
import './version000/index.css';
// import App from './version070/App';
// import App from './versionCurrent/App';
import App from './versionRedux/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todosReducer from './versionRedux/todosReducer';

// reducer wird nur übergeben, ausgeführt erst mit dispatch
const store = createStore(todosReducer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root')
);


