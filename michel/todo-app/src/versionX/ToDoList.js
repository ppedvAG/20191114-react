import React from 'react';
import Rating from './Rating';



export default function TodoList({ toDos = [], toggleTodo }) {
    return (
        <div>
            <ul>
                {toDos.map(e =>
                    <li key={e.id.toString()}><span className={elementClass(e.completed)} onClick={() => toggleTodo(e.id)}>{e.title}</span> <Rating NumberOfStars={e.userId} /></li>
                )}
            </ul>
        </div >
    );
};



// componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(json => this.setState({ toDos: json }));
// }

function elementClass(completed) {
    if (completed)
        return "Completed";

    return "";
}