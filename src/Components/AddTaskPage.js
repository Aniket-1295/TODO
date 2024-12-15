import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../redux/todoSlice';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddTaskPage = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    // Prepare the task data
    const newTask = {
      title,
      description,
      completed: false, // Newly added task is always incomplete
    };

    // Dispatch the action to add the task
    dispatch(addNewTask(newTask));

    // After adding the task, navigate back to the home page
    navigate('/');
  };


  return (
    // <div>AddTaskPage</div>

    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Add New Task</Typography>
      
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <Button variant="contained" onClick={handleAddTask} color="primary">
        Add Task
      </Button>
    </div>


  )
}

export default AddTaskPage