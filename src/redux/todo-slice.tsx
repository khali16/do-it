import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
  date: Date | null;
}

interface NewTodo {
  title: string;
  priority: string;
  date: Date | null;
}

interface DeleteTodo {
  id: number;
}

interface ToggleComplete {
  id: number;
  completed: boolean;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "śniadanie",
      completed: true,
      priority: "high",
      date: new Date(),
    },
    {
      id: 2,
      title: "obiad",
      completed: false,
      priority: "medium",
      date: new Date(),
    },
    {
      id: 3,
      title: "kolacja",
      completed: false,
      priority: "low",
      date: new Date(),
    },
  ] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<NewTodo>) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
        priority: action.payload.priority,
        date: action.payload.date,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<DeleteTodo>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleComplete: (state, action: PayloadAction<ToggleComplete>) => {
      const currentIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[currentIndex].completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
