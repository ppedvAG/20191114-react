import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/index';

const ToDoInput = ({dispatch}) => {
    let titleInput;
    let ratingInput;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!titleInput.value.trim())
                return;
            dispatch(addTodo(titleInput.value, ratingInput.value));
            titleInput.value = '';
            ratingInput.value = '';            
        }}>
            <input placeholder="Neuer Eintrag" ref={node => titleInput = node} />
            <input type="number" ref={node => ratingInput = node} />
            <input type="submit" value="Hinzufügen"  />
        </form>
    )
}

export default connect()(ToDoInput);