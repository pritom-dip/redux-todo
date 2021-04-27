import * as actions from '../actions/todoActions';

const initialState = {
    todos: []
};

export const TodoReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_TODOS:
            return {
                ...state, todos: action.payload
            };
        case actions.DELETE_TODO:

            const previousTodos = state.todos;
            const remainingTodos = previousTodos?.filter(todo => todo?.id != action?.payload);

            return {
                ...state,
                todos: remainingTodos
            }

        case actions.UPDATE_TODO:
            const updatedTodos = state.todos.filter(todo => {
                if (action.payload === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos
            }

        default:
            return state;
    }
}