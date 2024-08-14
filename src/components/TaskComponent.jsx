/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../mocks/task.class.js'

function TaskComponent ({ task }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <input type="checkbox" value={''} />
        <h3>Nombre: {task.name}</h3>
      </div>
      <div className='card-body'>
        <p>Descripción: {task.description}</p>
        <p>Nivel: {task.level}</p>
      </div>
      
      

    </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
}

export default TaskComponent