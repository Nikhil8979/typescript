import React from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: 1, name: "Course Finished" }];
  const addTodoHandler = (text: string) => {
    console.log(text, "---- name -");
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
