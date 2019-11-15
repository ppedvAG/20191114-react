import {connect} from 'react-redux';
import {toggleTodo} from './actions';
import ToDoList from './ToDoList';

function mapStateToProps(state){
    return {toDos: state.toDoReducer}
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);