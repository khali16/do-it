import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "śniadanie", completed: true },
    { id: 2, title: "obiad", completed: false },
    { id: 3, title: "kolacja", completed: false },
  ] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
