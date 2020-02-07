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
// react-redux' connect ist eine Alternative zu store.dispatch
// connect macht auch intern einige Optimierungen in Performance, deswegen ist vorzuziehen 
export default connect((state) => ({ todos: state }))(TodoList)
// Rückgabewert von connect ist eine Funktion, deswegen gleich ein Argument (TodoList)

