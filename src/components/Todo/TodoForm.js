import React from 'react'

const TodoForm = ( { handleChange, value, addTodo, editState, updateTodo }) => {
    return (
        <form onSubmit={addTodo}>
            <div class="form-group w-50">
                <label for="todoitems">Co musisz zrobić?</label>
                <input type="text" class="form-control" id="todoitems" aria-describedby="todo" onChange={handleChange} value={value}/>
            </div>
    {editState ?<button className="btn btn-todo">Edytuj!</button> : <button className="btn btn-todo">Dodaj!</button>}
        </form>
    )
}

export default TodoForm
