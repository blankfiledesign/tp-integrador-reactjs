import React, { useState } from 'react';
import './css/TaskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleChange} placeholder="Nueva tarea" />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;