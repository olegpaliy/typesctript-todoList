import { FC, FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-contex";
import classes from "./NewTodo.module.css";

const NewTodo: FC = (props) => {
  const todoCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim()) {
      todoCtx.addTodo(enteredText);
      todoInputRef.current!.value = "";
    } else {
      return alert("write a valid name");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">todo text</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>add todo</button>
    </form>
  );
};

export default NewTodo;
