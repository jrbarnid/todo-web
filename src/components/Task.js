import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    const {
        tasks,
        removeTaskCallback
    } = props

    const handleRemoveClick = index => {
        removeTaskCallback(index)
    }

    const onTextChange = event => {

    }

    return (
        <div>
            {tasks ? tasks.map((task) => {
            return (
                <div key={`task-div-${task.id}`} className="pb-2">
                    <input id={`task-${task.id}`} key={`task-${task.id}`} type="text" onBlur={onTextChange.bind(this, task.id)} />
                    <span id={`task-remove-${task.id}`} className="pl-3 pointer" onClick={handleRemoveClick.bind(this, task.id)}>
                        <FontAwesomeIcon icon={faMinus} className="text-danger" />
                    </span>
                </div>
            )
            }) : null}
        </div>
    )
}