// import React from 'react'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/todoSlice';
import { Button, Typography, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const dispatch = useDispatch();// Initialize dispatch function to trigger actions
  const { tasks, status } = useSelector((state) => state.todos);// Access tasks and status from Redux store

  const [currentPage, setCurrentPage] = useState(1);// State to manage current page
  const tasksPerPage = 5;// Number of tasks to show per page

  // Calculate the tasks for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);


  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the current page
  };

   // Fetch tasks when the component is mounted and status is idle
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [dispatch, status]);


  return (
    // <div>HomePage</div>

    <div style={{ padding: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Task List
    </Typography>
    <div style={{ marginBottom: '20px' }}>
      <Button variant="contained" component={Link} to="/add-task" style={{ marginRight: '10px' }}>
        Add Task
      </Button>
    </div>
    {currentTasks.map((task) => (
      <div
        key={task.id}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        <Typography variant="h6">{task.title}</Typography>
        <Typography>Status: {task.completed ? 'Completed' : 'Pending'}</Typography>
        <Button
          variant="outlined"
          component={Link}
          to={`/edit-task/${task.id}`}
          style={{ marginTop: '10px' }}
        >
          Edit Status
        </Button>
      </div>
    ))}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Pagination
        count={Math.ceil(tasks.length / tasksPerPage)} // Total number of pages
        page={currentPage} // Current active page
        onChange={handlePageChange} // Handle page changes
        color="primary"
        size="large"
      />
    </div>
  </div>










  )
}

export default HomePage