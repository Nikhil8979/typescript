import React from "react";
import { Todo } from "../todo.model";
interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}
export const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <span>
            {todo?.name}
            <button onClick={onDeleteTodo.bind(null, todo?.id)}>Delete</button>
          </span>
        </li>
      ))}
    </ul>
  );
};
