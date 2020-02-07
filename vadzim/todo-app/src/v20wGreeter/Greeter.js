import React from 'react';

function Greeter() {
  let date = new Date();
  return (
    <div>
      <p> hi, React Kurs in Dresden!</p>
      <p>Heute ist: {date.toLocaleDateString()}</p>
      {/* <p>Heute ist: {Date().toLocaleDateString()}</p> */}
      {/* Date() gibt String zurück */}
      <p>Heute ist: {Date().toString()}</p>
     </div>
  );
}

export default Greeter;