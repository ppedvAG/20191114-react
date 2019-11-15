import React from 'react';
import Todo from './Todo';

export default function Todos() {
    let todos = [
        new Todo(0, 'fahrrad reparieren', false, 2),
        new Todo(1, 'einkaufen', true, 2),
        new Todo(2, 'packet abholen', false, 2)
     /*    {id: 0, title: 'fahrrad reparieren', done: false},
        {id: 1, title: 'einkaufen', done: true},
        {id: 2, title: 'packet abholen', done: false}, */
    ]
    return(
        <ul>
            {todos.map(todo => (
                <li key={todo.id.toString()} className={todo.completed ? 'line-through' : 'none'}>{todo.title}</li>
            ))}
        </ul>
    )
}