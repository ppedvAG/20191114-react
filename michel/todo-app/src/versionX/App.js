import React from 'react';
import './App.css';
import Greeter from './Greeter';
import ToDoListContainer from './ToDoListContainer';
import ToDoInput from './ToDoInput';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);


function App() {
    return (
        <div>
            <Provider store={store}>
                <Greeter Name="Michel" />
                <ToDoListContainer />
                <ToDoInput />
            </Provider>
        </div>
    );
}
export default App;