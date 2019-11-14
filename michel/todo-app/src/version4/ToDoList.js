import React from 'react';
import ToDo from './ToDo';
import Rating from './Rating';

export default function ToDoList() {
    var elements = [
        new ToDo(1, "Aufgabe1", true, 4, ""),
        new ToDo(2, "Aufgabe2", false, 5, ""),
        new ToDo(3, "Aufgabe3", true, 2, ""),
        new ToDo(4, "Aufgabe4", false, 10, "")
    ];

    return (
        <ul>
            {elements.map(e => 
                <li key={e.id.toString()}><span className={elementClass(e.completed)}>{e.title}</span> <Rating NumberOfStars={e.rating}/></li>
                )}
        </ul>
    );
}

function elementClass(completed)
{
    if(completed)
        return "Completed";

    return "";
}
