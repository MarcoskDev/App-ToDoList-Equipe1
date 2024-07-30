import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

interface Props {
   todos: Todo[];
   completed: boolean;
   toggleComplete: (id: number) => void;
   toggleUncomplete: (id: number) => void;
   removeTodo: (id: number) => void;
   editTodo: (id: number, text: string) => void;
   editingId: number | null;
   setEditingId: (id: number | null) => void;
}

const TodoList: React.FC<Props> = ({
   todos,
   completed,
   toggleComplete,
   toggleUncomplete,
   removeTodo,
   editTodo,
   editingId,
   setEditingId,
}) => {
   return (
      <ul className="todo-list">
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               todo={todo}
               completed={completed}
               toggleComplete={toggleComplete}
               toggleUncomplete={toggleUncomplete}
               removeTodo={removeTodo}
               editTodo={editTodo}
               editingId={editingId}
               setEditingId={setEditingId}
            />
         ))}
      </ul>
   );
};

export default TodoList;
