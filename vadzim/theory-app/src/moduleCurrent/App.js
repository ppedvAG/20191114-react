import React from 'react';
import MyComponent from './myComponent';
import MyComponentWProps from './myComponentWProps';


export function App() {
  return (
    <div>
     <h1>Function Components & Props</h1>
     <MyComponent />
     <hr/>
     <h1>Comp W Props</h1>
     <MyComponentWProps gift1="Geschenk von oben" gift2="Geschenk von oben"/>
    </div>    
  );
}