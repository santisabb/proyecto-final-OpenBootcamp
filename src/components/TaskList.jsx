/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../mocks/task.class.js'
import { levels } from '../mocks/level.enum.js'
import TaskComponent from './TaskComponent.jsx'

function TaskList() {
    const task1 = new Task('Ejemplo 1', 'Tarea de ejemplo 1', false, levels.normal)
    const task2 = new Task('Ejemplo 2', 'Tarea de ejemplo 2', false, levels.normal)

    let arrayTask = [task1, task2]

  return (
    <div className='card' style={{ width: '18rem' }}>
        <ul className='list-group list-group-flush'>
            {
                arrayTask.map((t) => {
                    return(
                        <li className='list-group-item' key={t.name}>
                            <TaskComponent task={t} />
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

TaskList.propTypes = {}

export default TaskList
