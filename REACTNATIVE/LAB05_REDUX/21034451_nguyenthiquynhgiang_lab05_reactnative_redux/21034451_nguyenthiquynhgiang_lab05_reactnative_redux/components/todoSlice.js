import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: '1', title: 'Làm bài tập javascripts', completed: false },
    { id: '2', title: 'Làm bài tập reactnative', completed: true },
    { id: '3', title: 'Làm bài tập reactjs', completed: false },
    { id: '4', title: 'Làm bài tập springboot', completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ 
        id: Date.now().toString(), 
        title: action.payload, 
        completed: false 
      });
    },
    //tdoi trthai hthanh cviec
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
