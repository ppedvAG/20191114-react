import React, {Component} from 'react';

class TodoList extends Comment {
    constructor(props){
        super(props);
        this.state={
            todos=[{id:1,title:'learn',completed:false},{id:2,title:'listen',completed:true},{id:3,title:'sleep',completed:false}]
        }
      }

    getClassName(completed){
        if(completed){
            return {"text-decoration":"line-through"}
        }
        else{
            return {"text-decoration":"none"}
        }
    }

    
render(){
  return (
    <div>
        <ul>
        let items = this.state.todos.map((item, key) =>
            <li style={getClassName(item.completed)} key={item.id}>{item.title}</li>);
            {items}
        </ul>
    </div>
  );
}
}
 
export default TodoList;
