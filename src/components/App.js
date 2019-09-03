import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css'
import Task from './Task';

export default () => {
  const [tasks, setTasks] = useState([])

  const handleAddTaskClicked = () => {
    const newTasks = [...tasks, {
      id: getId(),
      value: '',
      checked: false
    }]
    setTasks(newTasks)
  }

  const getId = () => {
    return tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1
  }

  const removeTaskCallback = index => {
    const newTasks = tasks.filter(task => task.id !== index)
    setTasks(newTasks)
  }

  const toggleDoneCallback = index => {
    let newTasks = tasks

    newTasks.forEach(task => {
      if (task.id === index) {
        task.checked = !task.checked
      }
    })

    setTasks([...newTasks])
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
        toggleDoneCallback={toggleDoneCallback}
      />
    </div>
  );
}
