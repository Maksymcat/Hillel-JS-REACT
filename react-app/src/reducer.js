const initialState = {
    todos: [],
    loading: false  ,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state,
              todos:  [...state.todos, action.payload.todos]
            };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id), };
        case 'LOAD_TODO':
            return {...state, loading: true, };
                case 'EDIT_TEXT': 
                return { ...state, todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)};
        case 'TOGGLE_TODO': 
        return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: todo.completed ? !todo.completed : true } : todo)};
        case 'CLEAR_TODOS': 
        return {...state, todos: []}
        default:
            return state;
    }
};

export default reducer;