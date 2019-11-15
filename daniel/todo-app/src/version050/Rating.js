import React from 'react';

function Rating(props) {
    let anzahl=props.anzahl;
  return (
    <div>{'*'.repeat(anzahl)}</div>
  );
}
 
export default Rating;
