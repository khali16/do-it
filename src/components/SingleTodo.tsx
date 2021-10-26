import React from "react";
import { ListItem, Checkbox, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todo-slice";
import { useStyles } from "./Styles/styles";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

const SingleTodo: React.FC<Props> = ({ id, title, completed, priority }) => {
  const dispatch = useDispatch();
  const classes = useStyles({ priority });

  const completeTodosHandler = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <ListItem key={id} className={classes.singleTodo}>
      <Checkbox checked={completed} onChange={completeTodosHandler} />
      <ListItemText>{title}</ListItemText>
      <DeleteIcon onClick={deleteTodoHandler} />
    </ListItem>
  );
};

export default SingleTodo;
