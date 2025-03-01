import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim()) {
        addTodo(text);
        setText(""); 
      }
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form> 
    </div>
  )
}

export default AddTodo

