import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AddTaskPage from './Components/AddTaskPage';
import EditTaskPage from './Components/EditTaskPage';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
