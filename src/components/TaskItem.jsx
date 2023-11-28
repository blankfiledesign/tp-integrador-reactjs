
import React, { useState } from 'react';
import './css/TaskItem.css'

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const [isCompleted, setCompleted] = useState(task.completed);

  const handleToggleComplete = () => {
    setCompleted(!isCompleted);
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className='task-item' style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleToggleComplete}>{isCompleted ? 'Desmarcar' : 'Completar'}</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
