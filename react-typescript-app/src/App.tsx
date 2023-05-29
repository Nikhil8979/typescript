import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      {
        id: Math.random(),
        name: text,
      },
    ]);
  };
  const todoDeleteHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList onDeleteTodo={todoDeleteHandler} todos={todos} />
    </div>
  );
};

export default App;
