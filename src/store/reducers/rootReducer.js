import { combineReducers } from 'redux';
import { TodoReducers } from './todoReducers';

export const rootReducers = combineReducers({
    todos: TodoReducers,
    // auth: AuthReducer
});