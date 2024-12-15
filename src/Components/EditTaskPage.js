import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toggleTaskStatus } from '../redux/todoSlice';
import { Button, Typography } from '@mui/material';

const EditTaskPage = () => {
    const { id } = useParams(); // Fetch the task ID from the URL
  const taskId = parseInt(id, 10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) =>
    state.todos.tasks.find((task) => task.id === taskId)
  );

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(taskId)); // Dispatch the toggle action
    navigate('/'); // Redirect to the HomePage after toggling
  };

  if (!task) {
    return <Typography variant="h6">Task not found!</Typography>;
  }
  return (
    // <div>EditTaskPage</div>
    <div style={{ padding: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Edit Task Status
    </Typography>
    <Typography variant="h6">Task Title: {task.title}</Typography>
    <Typography>Status: {task.completed ? 'Completed' : 'Pending'}</Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={handleToggleStatus}
      style={{ marginTop: '20px' }}
    >
      Toggle Status
    </Button>
  </div>

  )
}

export default EditTaskPage