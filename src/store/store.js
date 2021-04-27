import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from './reducers/rootReducer';
import thunk from 'redux-thunk';
const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
export default store;