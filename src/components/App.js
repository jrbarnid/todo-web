import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css'
import Task from './Task';

export default () => {
  const [tasks, setTasks] = useState([])

  const handleAddTaskClicked = () => {
    let newTasks = [...tasks, {
      id: tasks.length,
      value: ''
    }]
    setTasks(newTasks)
  }

  const removeTaskCallback = index => {
    const newTasks = tasks.filter(task => task.id !== index)
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <div className="pt-5 pb-3">
        <span id="task-header">
          Tasks
        </span>
        <span id="task-add" className="pl-3 pointer" onClick={handleAddTaskClicked}>
          <FontAwesomeIcon icon={faPlus} className="text-success" />
        </span>
      </div>
      <Task 
        tasks={tasks} 
        removeTaskCallback={removeTaskCallback}
      />
    </div>
  );
}
