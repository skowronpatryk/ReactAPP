import React from 'react'
import { FaMapPin } from "react-icons/fa";

const TodoList = ({ name, onDelete, id, curIndex, onEdit }) => {
    return (
        <div className="col-sm-4 col-lg-3">
            <div className="todo-item">
                <div className="todo-icon">
                    <FaMapPin className="todo-icon"/>
                </div>
                <div className="todo-text">
                    <p className="todo-title">{name}</p>
                </div>
                    <button className="todo-del" onClick={() => onDelete(id)}>X</button>
                    <button onClick={() => onEdit(id)} className="todo-edit">Edytuj</button>
            </div>
        </div>
    )
}

export default TodoList
