let nextTodoId = 0;

export const addTodoActionCreator = (title, userID) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    userID
})

export const removeTodoActionCreator = (id) => ({
    type: 'REMOVE_TODO',
    id: id   
})