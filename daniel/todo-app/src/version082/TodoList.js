import React, { useEffect, useState } from 'react';

function TodoList() {

    function getClassName(completed) {
        if (completed) {
            return { "text-decoration": "line-through" }
        }
        else {
            return { "text-decoration": "none" }
        }
    }

    const [todos,setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    })

    let items = todos.map((item, key) =>
        <li style={getClassName(item.completed)} key={item.id}>{item.title}</li>
    );
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default TodoList;
