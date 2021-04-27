import { fetchTodos } from "../../api/api";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FETCH_TODOS = 'FETCH_TODO';

export const fetchTodo = () => async (dispatch) => {
    try {
        const { data } = await fetchTodos();
        dispatch({ type: FETCH_TODOS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};

export const updateTodo = id => {
    return {
        type: UPDATE_TODO,
        payload: id
    };
};