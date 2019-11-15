import React, { Component } from 'react';
import AddTodo from './AddTodo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ id: 1, title: 'learn', completed: false, userId: 1 }, { id: 2, title: 'listen', completed: true, userId: 1 }, { id: 3, title: 'sleep', completed: false, userId: 2 }]
        }
    }
    getClassName(completed) {
        if (completed) {
            return { "text-decoration": "line-through" }
        }
        else {
            return { "text-decoration": "none" }
        }
    }

    handleClick(title, userId){
        let newTodos=this.state.todos.slice();
        newTodos.push({id:5,title:title, userId:userId,completed:false});
        this.setState({
            todos: newTodos
          });
    }

    render() {
        return (
            <div>
                <AddTodo myOnClick={(title, userId) => this.handleClick(title, userId)}/>
                <ul>
                    {this.state.todos.map(item => <li style={this.getClassName(item.completed)} key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
