import React, {useState} from 'react';

function AddTodo(props) {
  const [inputTitleValue, setInputTitle] = useState("");
  const [inputUserIdValue, setInputId] = useState("");

  return (
    <div>
      <input type="text" placeholder="todo title" value={inputTitleValue} onChange={event => setInputTitle(event.target.value)} id="inputTitle" />
      <input type="text" placeholder="userId" value={inputUserIdValue} onChange={event => setInputId(event.target.value)} id="inputUserId" />
      <button id="start" onClick={() => props.myOnClick(inputTitleValue, inputUserIdValue)} disabled={inputUserIdValue === "" || inputTitleValue === ""}>Start</button>
    </div>
  );
}

export default AddTodo;
