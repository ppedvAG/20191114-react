import React from 'react';
import DateTime from './DateTime';

function Greeter(props) {
  return (
    <div>Hallo {props.inputName}, es ist <DateTime></DateTime></div>
  );
}
 

export default Greeter;
