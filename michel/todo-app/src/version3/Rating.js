import React from 'react';

export default function Rating(props)
{
    return(
        <div>{
            "*".repeat(props.NumberOfStars)
            }</div>
    );
}