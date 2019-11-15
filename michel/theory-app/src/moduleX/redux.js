import React from 'react';
import {createStore} from 'redux';

export default function ReduxComp() {
   const myReducer = (state = 1, action) => 
   {
       switch(action.type)
       {
           case "INC":
               return state + 1;
            case "DEC":
                return state - 1;
            default:
                return state;
       }
   }

   var store = createStore(myReducer);
   store.dispatch({type: "INC"});
   //store.dispatch({type: "DEC"});

   return (
       <div>
        {store.getState()}
       </div>
   );
}