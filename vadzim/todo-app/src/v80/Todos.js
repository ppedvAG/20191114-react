import React, { useEffect, useState } from 'react';

export default function Todos() {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json => setTodos(json))
    });
   /*  let todos = [
        new Todo(0, 'fahrrad reparieren', false, 2),
        new Todo(1, 'einkaufen', true, 2),
        new Todo(2, 'packet abholen', false, 2)      
    ] */
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id.toString()} className={todo.completed ? 'line-through' : 'none'}>{todo.id} - {todo.title}</li>
            ))}
        </ul>
    )
}