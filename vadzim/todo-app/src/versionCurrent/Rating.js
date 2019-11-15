import React from 'react';
import './Rating.css';

export default function Rating(banana) {
    return (
        <span>{'*'.repeat(banana.stars)}</span>
    );
}