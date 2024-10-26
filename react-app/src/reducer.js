const initialState = {
    todos: [],
    loading: false  ,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_TODOS_SUCCESS':
            return { ...state, loading: false, todos: action.payload };
        case 'FETCH_TODOS_FAILURE':
            return { ...state, loading: false, error: action.error };
            case 'CLEAR_TODOS': 
            return { ...state, todos: [] };
        default:
            return state;
    }
};

export default reducer;