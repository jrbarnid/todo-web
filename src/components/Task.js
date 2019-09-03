import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

export default (props) => {
    const {
        tasks,
        removeTaskCallback,
        toggleDoneCallback,
    } = props

    const handleRemoveClick = index => {
        removeTaskCallback(index)
    }

    const onTextChange = event => {

    }

    const handleDoneClick = index => {
        toggleDoneCallback(index)
    }

    return (
        <div>
            {tasks ? tasks.map((task) => {
            return (
                <div key={`task-div-${task.id}`} className="pb-2">
                    <span className="pointer" onClick={handleDoneClick.bind(this, task.id)}>
                        <FontAwesomeIcon icon={task.checked ? faCheckSquare : faSquare} />
                    </span>
                    <span className="pl-3">
                        <input 
                            id={`task-${task.id}`} 
                            key={`task-${task.id}`} 
                            type="text" 
                            onBlur={onTextChange.bind(this, task.id)} 
                        />
                        <span id={`task-remove-${task.id}`} className="pl-3 pointer" onClick={handleRemoveClick.bind(this, task.id)}>
                            <FontAwesomeIcon icon={faMinus} className="text-danger" />
                        </span>
                    </span>
                </div>
            )
            }) : null}
        </div>
    )
}