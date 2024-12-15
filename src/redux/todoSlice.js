import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch tasks from the dummy API
export const fetchTasks = createAsyncThunk('todos/fetchTasks', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data.slice(0, 50); // Limit to 50 tasks
  });

  const initialState = {
    tasks: [],
    status: 'idle',
  };


  const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      // Toggle the status of a task
      toggleTaskStatus: (state, action) => {
        
      },
      // Add a new task to the end of the task list
      addNewTask: (state, action) => {
         // Add the new task to the list
      },
    },
   
  });
  
  export const { toggleTaskStatus, addNewTask } = todoSlice.actions;
  export default todoSlice.reducer;


