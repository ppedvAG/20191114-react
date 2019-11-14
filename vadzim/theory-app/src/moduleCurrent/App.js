import React from 'react';
import * as jsx from './JSXintro';

export function App() {
  return (
    <div>
      <h1>Thema JSX intro</h1>
      <hr/>
      <jsx.JSXExpression />
      <hr/>
      <jsx.JSXManyEls />
      <hr/>
      <jsx.JSXrendersNoBooleans />
    </div>    
  );
}