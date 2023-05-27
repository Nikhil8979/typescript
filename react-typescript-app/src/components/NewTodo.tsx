import React, { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}
export const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTextValue = textInputRef.current!.value;
    props.onAddTodo(inputTextValue);
  };
  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text"></label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </>
  );
};
