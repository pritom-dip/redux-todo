import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/actions/todoActions';
import './singleTodo.css';

const SingleTodo = ({ todo }) => {

    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteTodo(id));
    }

    const handleCompleted = id => {
        dispatch(updateTodo(id));
    }

    return (
        <li className={`list-group-item ${todo?.completed && 'completed'}`}  >
            {todo?.title}
            <button onClick={() => handleDelete(todo?.id)} className="btn btn-danger ms-2 me-2">Delete</button>
            <button onClick={() => handleCompleted(todo?.id)} className="btn btn-info">Completed</button>
        </li>
    );
};

export default SingleTodo;