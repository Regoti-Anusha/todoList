import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
        <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>


    /src/main.jsx
    </div>
  )
}

export default TodoList
