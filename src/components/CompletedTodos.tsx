import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useStyles } from "./Styles/styles";

const CompletedTodos = () => {
  const classes = useStyles();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <List className={classes.todosList}>
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <ListItem key={todo.id} className={classes.completedTodos}>
            <ListItemText>{todo.title}</ListItemText>
          </ListItem>
        ))}
    </List>
  );
};

export default CompletedTodos;
