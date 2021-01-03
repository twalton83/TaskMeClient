import React from 'react'
import TaskListItem from './TaskListItem';

export default function TaskView({ project }) {

  return (
    <div>
      <h1>{project.name}</h1>
      {
        project.tasks.map(task => 
          <TaskListItem task={task}/>
        )
      }
    </div>
  )
}
