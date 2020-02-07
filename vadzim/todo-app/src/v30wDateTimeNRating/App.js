import React from 'react';
import Greeter from './Greeter'
import Rating from './Rating';

function App() {
  return (
    <div><Greeter city='Dresden'/>
    <div>Das Essen bei dem Tschechen war <Rating stars={5} /></div>
    </div>
  );
}

export default App;
