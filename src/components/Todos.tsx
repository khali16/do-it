import { Box, ListItemText, ListItem, List, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <List
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "5%",
      }}
    >
      {/* //@ts-ignore */}
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          style={{ marginTop: "5px", border: "1px solid grey" }}
        >
          <Checkbox />
          <ListItemText>{todo.title}</ListItemText>
          <DeleteIcon />
        </ListItem>
      ))}
    </List>
  );
};

export default Todos;
