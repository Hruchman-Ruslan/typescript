import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
}

const initialState: Task[] = [];

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteToto: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteToto } = todoSlice.actions;
export default todoSlice.reducer;
