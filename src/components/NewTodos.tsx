import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo-slice";

const NewTodos = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {};
  return (
    <Box
      style={{
        width: "50%",
        justifyContent: "center",
        margin: "auto",
        marginTop: "5%",
        alignItems: "center",
        padding: "1",
      }}
    >
      <TextField
        required
        variant="outlined"
        fullWidth
        placeholder="ToDo"
        inputProps={{ maxLength: 12 }}
        value={todoText}
        onChange={(e) => setTodoText(e.currentTarget.value)}
      />
      <Button
        fullWidth
        variant="outlined"
        style={{ marginTop: "10px" }}
        onClick={submitHandler}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewTodos;
