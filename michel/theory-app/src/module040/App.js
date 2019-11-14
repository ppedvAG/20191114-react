import React from 'react';
import ClassComponent from './ClassComponent';
import ClassStateComponent from './ClassStateComponent';

function App() {
  return (
    <div>
      <h2>Simple Class-Component</h2>
      <ClassComponent content="Blub" />
      <hr/>
      <ClassStateComponent />
    </div>
  );
}

export default App;
