import React from 'react';
import { addTodoActionCreator } from './actionCreators';
import { connect } from 'react-redux'

function AddTodo(props) {
  let inputTitle;
  let inputUserId;

  return (
    <div>
      
      <input type="text" placeholder="todo title" ref={node => inputTitle = node} id="inputTitle" />
      {/* mit ref={node => input = node} wird variable input mit dem DOM-Node/HTMLElement input gebunden*/}
      <input type="text" placeholder="userId" ref={node => inputUserId = node} id="inputUserId" />
      <button id="start" onClick={() => {
        props.dispatch(addTodoActionCreator(inputTitle.value, inputUserId.value));
        inputTitle.value = '';
        inputUserId.value = '';
       {/*  }} disabled={inputTitle.value === "" || inputUserId.value === ""}>ADD</button> */}
       {/* an dieser Stelle ist inputTitle undefined */}
        }} >ADD</button>
      </div>
  );
}

export default connect()(AddTodo);
