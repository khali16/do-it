import React, { useState } from "react";
import {
  Button,
  Card,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo-slice";
import { useStyles, theme } from "./Styles/styles";
import DatePicker from "./DatePicker";

const NewTodos = () => {
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const dispatch = useDispatch();
  const classes = useStyles();

  const submitHandler = () => {
    dispatch(addTodo({ title: todoText, priority: priority, date: date }));
    console.log(date);
    setTodoText("");
    setPriority("");
    setDate(new Date());
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(event.target.value as string);
  };

  const handleChangeDatePicker = (newDate: Date | null) => {
    setDate(newDate);
  };

  return (
    <Card className={classes.todosBox}>
      <ThemeProvider theme={theme}>
        <TextField
          required
          variant="outlined"
          placeholder="ToDo"
          inputProps={{ maxLength: 12 }}
          value={todoText}
          onChange={(e) => setTodoText(e.currentTarget.value)}
          className={classes.newTodo}
        />
        <InputLabel className={classes.newTodoLabel}>Priority</InputLabel>
        <Select
          margin="dense"
          labelId="label"
          variant="outlined"
          label="Priority"
          fullWidth
          value={priority}
          onChange={handleChange}
          className={classes.newTodo}
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
        <div className={classes.datePicker}>
          <DatePicker changeDate={handleChangeDatePicker} date={date} />
        </div>
        <Button
          fullWidth
          variant="outlined"
          className={classes.newTodoButton}
          onClick={submitHandler}
        >
          Add
        </Button>
      </ThemeProvider>
    </Card>
  );
};

export default NewTodos;
