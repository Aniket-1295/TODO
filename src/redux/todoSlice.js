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

// Create slice for todo state management
  const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      // Toggle the status of a task
      toggleTaskStatus: (state, action) => {
        const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Toggle the completion status
      }
        
        
      },
      // Add a new task to the end of the task list
      addNewTask: (state, action) => {
         // Add the new task to the list

         const newId = state.tasks.length > 0 ? state.tasks[state.tasks.length - 1].id + 1 : 1;
         const newTask = {
           id: newId,
           title: action.payload.title,
           completed: false, // Default status is pending
         };
         state.tasks.push(newTask);
      },
    },

    // Handle asynchronous actions like fetching tasks
    extraReducers: (builder) => {
        builder  // When fetchTasks is pending, set status to 'loading'
          .addCase(fetchTasks.pending, (state) => {
            state.status = 'loading';
          })
          // When fetchTasks is successful, update tasks and status
          .addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tasks = action.payload;
          })
          // When fetchTasks fails, set status to 'failed'
          .addCase(fetchTasks.rejected, (state) => {
            state.status = 'failed';
          });
      },


   
  });
  
  export const { toggleTaskStatus, addNewTask } = todoSlice.actions;
  export default todoSlice.reducer;


