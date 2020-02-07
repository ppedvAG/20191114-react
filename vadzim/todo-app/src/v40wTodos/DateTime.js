import React from 'react';

export default function DateTime() {
    let date = new Date();
    return (
        <span>{date.toLocaleDateString()}</span>
    )
}