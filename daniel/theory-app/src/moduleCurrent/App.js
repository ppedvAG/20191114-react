import React from 'react';
import * as jsx from './JSXintro';
import Login from './Login';

function App() {
  return (
    <div>
      <h1>Thema JSX intro</h1>
      <hr/>
      <jsx.JSXExpression></jsx.JSXExpression>
      <hr></hr>
      <jsx.JSXManEls></jsx.JSXManEls>
      <jsx.JSXrendersNoBooleans></jsx.JSXrendersNoBooleans>
      <hr></hr>
      <jsx.JSXElsAreObjects></jsx.JSXElsAreObjects>

      <Login></Login>
    </div>
  );
}

export default App;
