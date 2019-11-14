import React from 'react';

export default function DateTime(){
    return (
        new Date().toLocaleDateString()
    );
}