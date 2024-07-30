import React, { useState } from 'react';
import '../styles/TodoItem.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  completed: boolean;
  toggleComplete: (id: number) => void;
  toggleUncomplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
  editingId: number | null;
  setEditingId: (id: number | null) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  completed,
  toggleComplete,
  toggleUncomplete,
  removeTodo,
  editTodo,
  editingId,
  setEditingId
}) => {
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(todo.id, editText);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => completed ? toggleUncomplete(todo.id) : toggleComplete(todo.id)}
      />
      {editingId === todo.id ? (
        <form onSubmit={handleEditSubmit}>
          <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span onClick={() => setEditingId(todo.id)}>
          {todo.text}
        </span>
      )}
      <div className="icons">
        <button onClick={() => setEditingId(todo.id)}>✏️</button>
        <button onClick={() => removeTodo(todo.id)}>🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
