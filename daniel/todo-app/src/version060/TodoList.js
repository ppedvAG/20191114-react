import React from 'react';

function TodoList() {

    function getClassName(completed){
        if(completed){
            return {"text-decoration":"line-through"}
        }
        else{
            return {"text-decoration":"none"}
        }
    }

    let todos=[{id:1,title:'learn',completed:false},{id:2,title:'listen',completed:true},{id:3,title:'sleep',completed:false}];
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
