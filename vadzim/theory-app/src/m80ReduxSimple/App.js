import { createStore } from 'redux';
import React from 'react';

/* COMPONENT AS A FUNCTION, makes more sense here */
function App() {

    /* Mit Hilfe von Reducern wird auf State zugegriffen und durch actions geändert */
    const myReducer = (state = 1, action) => {
        switch (action.type) {
            case 'MAL3':
                return state * 3;
            case 'MINUS7':
                return state - 7;
            case 'PLUS2':
                return state + 2;
            default:
                return state;
        }
    }

    let myStore = createStore(myReducer);
    myStore.dispatch({ type: 'MAL3' });
    myStore.dispatch({ type: 'PLUS2' });
    myStore.dispatch({ type: 'MAL3' });
    myStore.dispatch({ type: 'PLUS2' });
    myStore.dispatch({ type: 'MINUS7' });

    window.console.log(myStore.getState());

    return (
        <div>{myStore.getState()}</div>

    );
}
export default App;



