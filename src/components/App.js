import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css'

export default () => {
  const [tasks, setTasks] = useState([])

  const handleAddTaskClicked = () => {
    setTasks(prevState => {return [...prevState, '']})
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
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={`task-div-${index}`} className="pb-2">
              <input id={`task-${index}`} key={`task-${index}`} type="text" />
            </div>
          )
        })}
      </div>
    </div>
  );
}
