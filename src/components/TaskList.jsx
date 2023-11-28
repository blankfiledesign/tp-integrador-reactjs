import React from 'react';
import TaskItem from '../components/TaskItem';
import './css/TaskList.css'

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;