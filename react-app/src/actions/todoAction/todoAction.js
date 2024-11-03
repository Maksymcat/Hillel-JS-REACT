export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {text}
});
export const loadTodo = () => ({
    type: 'LOAD_TODOS',
});

export const removeTodo = (id)  => ({
type: 'REMOVE_TODO',
payload: {id}
}); 
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: {id}
});  
        
export const editText = (id,text) => ({
    type: 'EDIT_TEXT',
    payload: {id,text}
});
export const clearCompletedTodos = () => ({
    type: 'CLEAR_TODOS',
  });