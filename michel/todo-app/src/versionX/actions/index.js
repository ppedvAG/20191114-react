let nextTodoId = 0
export const addTodo = (text, rating) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  rating: rating,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})