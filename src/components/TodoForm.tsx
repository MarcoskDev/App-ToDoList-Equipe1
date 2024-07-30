import React, { useState } from "react";
import "../styles/TodoForm.css";

interface Props {
   addTodo: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
   const [text, setText] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addTodo(text);
      setText("");
   };

   return (
      <form onSubmit={handleSubmit} className="todo-form">
         <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         <button type="submit">Criar</button>
      </form>
   );
};

export default TodoForm;
