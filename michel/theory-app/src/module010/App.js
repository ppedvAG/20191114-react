import React from 'react';
import * as jsx from './JsxIntro';

function App() {
  return (
    <div>
      <h1>Thema JSX Intro</h1>
      <hr/>
      <jsx.JSXExpression />
      <hr />
      <jsx.JSXManyEls />
      <hr/>
      <jsx.JSXrendersNoBooleans />
      <hr/>
      <jsx.JSXElementsAreObjects />
      <hr />
      <jsx.JSXvsCreateEl/>
    </div>
  );
}

export default App;
