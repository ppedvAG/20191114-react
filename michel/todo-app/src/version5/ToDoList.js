import React, { Component } from 'react';
import ToDo from './ToDo';
import Rating from './Rating';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [
                new ToDo(1, "Aufgabe1", true, 4, ""),
                new ToDo(2, "Aufgabe2", false, 5, ""),
                new ToDo(3, "Aufgabe3", true, 2, ""),
                new ToDo(4, "Aufgabe4", false, 10, "")
            ]
        };
    }

    render() {
        return (
            <ul>
                {this.state.toDos.map(e =>
                    <li key={e.id.toString()}><span className={elementClass(e.completed)}>{e.title}</span> <Rating NumberOfStars={e.rating} /></li>
                )}
            </ul>
        );
    }
}

function elementClass(completed) {
    if (completed)
        return "Completed";

    return "";
}
