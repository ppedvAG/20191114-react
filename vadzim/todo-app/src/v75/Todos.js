import React from "react";

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, title: "fahrrad reparieren", completed: false },
        { id: 1, title: "einkaufen", completed: true },
        { id: 2, title: "packet abholen", completed: false }
      ],
      inputText: ""
    };
  }
  handleChange(input){
    this.setState({inputText: input})
  }
  addTodo() {
    let newTodos = this.state.todos.slice();
    newTodos.push({
      id: newTodos.length,
      title: this.state.inputText,
      completed: false
    })
    this.setState({
      todos: newTodos
    })
  }
  
  render() {
    return (
      <div>
        <AddTodo onClick={addTodo(titleUser)}


   {/*      <input type="text" value={this.state.inputText} onChange={event => this.handleChange(event.target.value)}/>
        <button onClick={() => this.addTodo()}>ADD</button> */}
       
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo.id.toString()}>
                <th scope="row">{todo.id.toString()}</th>
                <td className={todo.completed ? "line-through" : "none"}>
                  {todo.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
