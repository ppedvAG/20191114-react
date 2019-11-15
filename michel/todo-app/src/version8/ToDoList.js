import React, { Component } from 'react';
import ToDo from './ToDo';
import Rating from './Rating';
import ToDoInput from './ToDoInput';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [
                new ToDo(1, "Aufgabe1", true, 4),
                new ToDo(2, "Aufgabe2", false, 5),
                new ToDo(3, "Aufgabe3", true, 2),
                new ToDo(4, "Aufgabe4", false, 10)
            ]
        };        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({ toDos: json }));
    }

    addToDo(title, rating) {
        var n = new ToDo(this.state.toDos.length + 1, title, false, rating);
        this.setState({toDos: this.state.toDos.concat(n)});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.toDos.map(e =>
                        <li key={e.id.toString()}><span className={elementClass(e.completed)}>{e.title}</span> <Rating NumberOfStars={e.userId} /></li>
                    )}
                </ul>
                <ToDoInput onClick={(t, r) => this.addToDo(t, r)} />
            </div >
        );
    }
}


function elementClass(completed) {
    if (completed)
        return "Completed";

    return "";
}