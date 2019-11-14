import React from 'react';
import './Rating.css';

function Rating(banana) {
  return (
   <span>{'*'.repeat(banana.stars)}</span>
  );
}

export default Rating;