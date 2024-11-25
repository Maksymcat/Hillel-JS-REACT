export const fetchTodos = ({inputValue, clear, apiLink}) => {
    return (dispatch) => {
      
        dispatch({ type: 'FETCH_TODOS_REQUEST' });

        fetch(`${apiLink}${inputValue}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(inputValue)
                console.log(data)
                dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data }); 
            })
            .catch(error => {
                dispatch({ type: 'FETCH_TODOS_FAILURE', error: error.message });
            });
    };
};
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const clearTodos = () => {
    console.log('todos')
    return { type: CLEAR_TODOS };
};