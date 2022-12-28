import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-contex";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{
  id: string;
  text: string;
}> = (props) => {
  const todoCtx = useContext(TodosContext);

  return (
    <li onClick={() => todoCtx.removeTodo(props.id)} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
