import React, { useState, useEffect } from "react";
import "./styles/App.css";
import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

const App: React.FC = () => {
   const [todos, setTodos] = useState<Todo[]>([]);
   const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
   const [editingId, setEditingId] = useState<number | null>(null);
   const [showCompleted, setShowCompleted] = useState(false);
   const [alert, setAlert] = useState<string | null>(null);
   const [alertVisible, setAlertVisible] = useState(false);

   useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
      const savedCompletedTodos = JSON.parse(
         localStorage.getItem("completedTodos") || "[]"
      );
      setTodos(savedTodos);
      setCompletedTodos(savedCompletedTodos);
   }, []);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   useEffect(() => {
      localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
   }, [completedTodos]);

   useEffect(() => {
      if (alert) {
         setAlertVisible(true);
         const timer = setTimeout(() => {
            setAlertVisible(false);
            setTimeout(() => setAlert(null), 500);
         }, 5000);
         return () => clearTimeout(timer);
      }
   }, [alert]);

   const addTodo = (text: string) => {
      if (text.trim() === "") {
         setAlert("Erro: A tarefa não pode estar vazia.");
         return;
      }
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
      setAlert("Sucesso: Tarefa criada.");
   };

   const toggleComplete = (id: number) => {
      const updatedTodos = todos.map((todo) =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos.filter((todo) => !todo.completed));
      setCompletedTodos([
         ...completedTodos,
         ...updatedTodos.filter((todo) => todo.completed),
      ]);
      setAlert("Sucesso: Tarefa concluída.");
   };

   const toggleUncomplete = (id: number) => {
      const updatedCompletedTodos = completedTodos.map((todo) =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setCompletedTodos(updatedCompletedTodos.filter((todo) => todo.completed));
      setTodos([
         ...todos,
         ...updatedCompletedTodos.filter((todo) => !todo.completed),
      ]);
      setAlert("Sucesso: Tarefa movida para tarefas criadas.");
   };

   const removeTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
      setAlert("Sucesso: Tarefa removida.");
   };

   const editTodo = (id: number, text: string) => {
      if (text.trim() === "") {
         setAlert("Erro: A tarefa não pode estar vazia.");
         return;
      }
      setTodos(
         todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
      );
      setEditingId(null);
      setAlert("Sucesso: Tarefa editada.");
   };

   const closeAlert = () => {
      setAlertVisible(false);
      setTimeout(() => setAlert(null), 500); // Give time for the animation to complete
   };

   return (
      <div className="App">
         <MenuBar />
         <div className="content">
            <Header />
            <TodoForm addTodo={addTodo} />
            {alert && (
               <div className={`alert ${alertVisible ? "show" : "hide"}`}>
                  {alert}
                  <button className="close-alert" onClick={closeAlert}>
                     ×
                  </button>
               </div>
            )}
            <div className="tabs">
               <button
                  onClick={() => setShowCompleted(false)}
                  className={!showCompleted ? "active" : ""}
               >
                  Tarefas Criadas ({todos.length})
               </button>
               <button
                  onClick={() => setShowCompleted(true)}
                  className={showCompleted ? "active" : ""}
               >
                  Concluídas ({completedTodos.length})
               </button>
            </div>
            {!showCompleted ? (
               <TodoList
                  todos={todos}
                  completed={false}
                  toggleComplete={toggleComplete}
                  toggleUncomplete={toggleUncomplete}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                  editingId={editingId}
                  setEditingId={setEditingId}
               />
            ) : (
               <TodoList
                  todos={completedTodos}
                  completed={true}
                  toggleComplete={toggleComplete}
                  toggleUncomplete={toggleUncomplete}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                  editingId={editingId}
                  setEditingId={setEditingId}
               />
            )}
         </div>
         <footer>Criado durante o prgram trias</footer>
      </div>
   );
};

export default App;
