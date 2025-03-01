import React, { useState } from 'react'

const EditTodo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
  
    const handleEdit = () => {
      if (newText !== "") {
        editTodo(todo.id, newText);
        setIsEditing(false);
      }
    };
  
  return (
    <div>
      
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`todo-text ${todo.completed ? "completed-text" : ""}`}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
    </div>
  )
}

export default EditTodo
