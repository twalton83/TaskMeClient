import React from 'react'

export default function TaskListItem({task}) {

  return (
    <div>
      <h1>
        {task.name}
      </h1>
    </div>
  )
}
