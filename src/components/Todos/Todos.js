import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../store/actions/todoActions';
import SingleTodo from '../SignleTodo/SingleTodo';

const Todos = () => {
    const dispatch = useDispatch();
    const todosData = useSelector(state => state.todos.todos);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    return (
        <div>
            <ul className="list-group p-4 d-flex justify-content-center">
                {
                    todosData?.map(todo => <SingleTodo key={todo?.id} todo={todo} />)
                }
            </ul>
        </div>
    );
};

export default Todos;