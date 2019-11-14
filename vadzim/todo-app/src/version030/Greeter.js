import React from 'react';
import DateTime from './DateTime';

function Greeter(props) {
  return (
    <div>
      <p> hi, React Kurs in {props.city}!</p>
      <DateTime />
     </div>
  );
}

export default Greeter;