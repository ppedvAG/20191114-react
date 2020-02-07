import React from 'react';

function DateTime(props) {
  let date = new Date();
  return (
    <div>
      <p>Heute ist: {date.toLocaleDateString()}</p>
      {/* <p>Heute ist: {Date().toLocaleDateString()}</p> */}
      {/* Date() gibt String zurück */}
      <p>Heute ist: {Date().toString()}</p>
     </div>
  );
}

export default DateTime;