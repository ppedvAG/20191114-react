import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo';

class TodoList extends Component {
    constructor(props){
        super(props);
    }    
    render() {
        return (
            <div>
                <AddTodo />
                <ul>
                    {this.props.todos.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        );
    }
}
export default connect((state) => ({ todos: state }))(TodoList)

