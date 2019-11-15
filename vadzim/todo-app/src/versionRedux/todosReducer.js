const todosReducer = (todos = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
            /* [...array, neuesElement] ist Kurzschreibweise für array.concat(neuesEl)*/
          ...todos,
          {
            id: action.id,
            title: action.title,
            completed: false,
            userID: action.userID
          }
        ]
      /* case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        ) */
      default:
        return todos
    }
  }
  
  export default todosReducer;