import React from 'react';
import * as jsx from './JSXintro';

export function App() {
  return (
    <div>
      <h1>Thema JSX intro</h1>
      <hr/>
      <h2>JSX: HTML & JS</h2>
      <jsx.JSXExpression />
      <hr/>
      <h2>JSX braucht ein Elternelement</h2>
      <jsx.JSXManyEls />
      <hr/>
      <h2>JSX gibt keine Booleans aus</h2>
      <jsx.JSXrendersNoBooleans />
      <hr/>
      <h2>JSX ist syntaktischer Zucker für React.createElement()</h2>
      <jsx.JSXElsAreObjects />
      <jsx.JSXvsCreateEl />
    </div>    
  );
}