import React from "react";
interface TodoListProps {
  todos: { id: number; name: string }[];
}
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo?.name}</li>
      ))}
    </ul>
  );
};
