import React from 'react';
import * as comps from './Components';

function App() {
  return (
    <div>
      <comps.AllComponents />
      <hr/>
      <comps.FuncComponent content="Blub" />
    </div>
  );
}

export default App;
