import React, { useContext } from "react";
import { TodosContext } from "../store/todos-contex";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem {...item} />
      ))}
    </ul>
  );
};

export default Todos;
