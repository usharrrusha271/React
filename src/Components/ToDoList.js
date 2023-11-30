import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todoArray, setTodoArray] = useState([]);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        getTodo();
    }, []);

    const getTodo = () => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setTodoArray(response.data);
            })
            .catch(() => {
                alert('data cannot display');
            });
    };

    const addtodo = () => {
        const todoobj = {
            title: todo, 
            completed: false,
        };

        axios.post('http://localhost:3000/posts', todoobj)
            .then(() => {
                getTodo();
                setTodo('');
            })
            .catch(() => {
                alert('not posted');
            });
    };

    const updateTodo = (id, dataChange) => {
        axios.put(`http://localhost:3000/posts/${id}`, dataChange)
            .then(() => {
                getTodo();
            })
            .catch(() => {
                alert('not updated')
            })
    }


    const deleteTodo = (id) => {

        axios.delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
                getTodo();
            })
            .catch(() => {
                alert('not deleted')
            })
    }
    return (
        <div style={{ alignItems: 'center' }}>
            <label htmlFor="Task">Task : </label>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />
            <button onClick={addtodo}>AddTask</button>

            <ol>
                {todoArray.map((todoItem) => (
                    <li key={todoItem.id} style={{ padding: '10px' }}>
                        {todoItem.title}
                        
                        <span style={{ marginLeft: '8px' }}>
                            <button
                                onClick={() => {
                                    const changeTitle = prompt('newTitle', todoItem.title)
                                    if (changeTitle !== null) {
                                        const dataChange = { title: changeTitle } 
                                        updateTodo(todoItem.id, dataChange)  
                                    }
                                }}>Update</button>
                        </span>
                        <span style={{ marginLeft: '8px' }}>
                            <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;