import Axios from 'axios';

export const fetchTodos = () => Axios.get('https://jsonplaceholder.typicode.com/todos');