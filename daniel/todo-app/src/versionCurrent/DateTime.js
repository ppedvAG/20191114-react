import React from 'react';

function DateTime() {
  return (
    <div>{new Date().toLocaleDateString()}</div>
  );
}
 
export default DateTime;
