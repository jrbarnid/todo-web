import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css'

function App() {
  return (
    <div className="container">
      <div className="pt-5">
        <span id="task-header">
          Tasks
        </span>
        <span id="task-add" className="pl-3">
          <FontAwesomeIcon icon={faPlus} className="text-success" />
        </span>
      </div>
    </div>
  );
}

export default App;
