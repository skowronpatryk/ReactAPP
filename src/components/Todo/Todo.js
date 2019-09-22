import React, { useState } from 'react'
import './Todo.css';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { TiArrowBack } from "react-icons/ti";

const curTodo = [
    { id: 1, name: 'Posprzątać pokój' },
    { id: 2, name: 'Kupić pralkę' },
]

const Todo = () => {

    const [todo, setTodo] = useState(curTodo);
    const [newTodo, setNewTodo] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(0);
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorType, setErrorType] = useState(false);

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.length > 5) {
            if(isEdit) {
                let tempTodo = todo.map(item => {
                    return item.id === id ? {...item, name: newTodo} : item
                })

                setTodo(tempTodo)
                setNewTodo('');
                setIsEdit(false);

                handleError('Edytowano liste!', true)

            } else {
                let tempId = todo.length < 1 ? 1 : todo.length + 1;
                let tempTodo = { id: tempId, name: newTodo }
                setTodo([...todo, tempTodo]);
                setNewTodo('');
                handleError('Dodano do listy', true)
            }
        } else {
            alert('Wymagam conajmniej 5 znaków!')
        }

    }

    const editTodo = (id) => {
        let tempTodo = todo.find(item => item.id === id);
        setNewTodo(tempTodo.name);
        setIsEdit(true);
        setId(id);
    }


    const handleDelete = (id) => {
        let tempTodo = todo.filter(item => item.id !== id);
        setTodo(tempTodo)

        handleError('Usunięto z listy!', false)
    }

    const handleError = (info, type) => {
        // 0 - TYPE WRONG 1 - TYPE GOOD
        setErrorMessage(info);
        setErrorType(type);

        setTimeout(() => {
            setErrorMessage(false);
            setErrorType(false);
        }, 2000)
    }

    const curDate = new Date().toLocaleDateString();

    return (
        <div className="todo-main">
            <a href="../" className="back-arrow"><TiArrowBack /></a>
            {errorMessage && 
            <div className={errorType ? 'error error-g' : 'error error-b'}>
                {errorMessage}
            </div>
            }
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mt-3">Dodaj listę rzeczy do zrobienia!</h1>
                        <p className="text-center date-string">W dniu {curDate}</p>
                    </div>
                </div>
                <div className="row">
                        <div className="col form-width">
                            <TodoForm handleChange={handleChange} value={newTodo} addTodo={addTodo} editState={isEdit} />
                        </div>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-5">
                        {todo.map((item, index) => <TodoList key={item.id} name={item.name} id={item.id} onDelete={handleDelete} curIndex={index} onEdit={editTodo}/>)}
                    </div>
                </div>
            </div>
        
    )
}

export default Todo
