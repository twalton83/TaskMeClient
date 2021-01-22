import React from 'react'
import List from '@material-ui/core/List';
import useStyles from './styles/TaskViewSectionStyle';
import TaskListItem from './TaskListItem';

export default function TaskViewSection({ tasks, completeTask, projects, setProjects }) {
  const classes = useStyles()
  return (
      <List className={ classes.root } >
        { tasks.map(task => (         
            <TaskListItem projects = { projects } completeTask = { completeTask }  key = { task.id } task = { task } setProjects = { setProjects } />
        ))}
      </List>
  )
}
