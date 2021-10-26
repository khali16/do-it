import { List } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SingleTodo from "./SingleTodo";
import { useStyles } from "./Styles/styles";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const classes = useStyles();

  return (
    <List className={classes.todosList}>
      {todos.map((todo) => (
        <SingleTodo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          priority={todo.priority}
        />
      ))}
    </List>
  );
};

export default Todos;
