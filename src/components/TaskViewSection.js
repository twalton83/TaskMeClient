import React from 'react'
import List from '@material-ui/core/List';
import useStyles from './styles/TaskViewSectionStyle';
import TaskListItem from './TaskListItem';
import { findProject } from '../modules/helpers';

export default function TaskViewSection({ tasks, completeTask, projects, setProjects, project }) {
  const deleteTask = (id) => {
    const projectToUpdate = findProject(projects, project.id)
    projectToUpdate.deleteTask(id)
    const prevProjects = projects.filter(proj => proj !== project)
    setProjects([... prevProjects, projectToUpdate])
  }
  const classes = useStyles()
  return (
      <List className={ classes.root } >
        { tasks.map(task => (         
            <TaskListItem projects = { projects } completeTask = { completeTask }  key = { task.id } task = { task } setProjects = { setProjects } deleteTask = { deleteTask }/>
        ))}
      </List>
  )
}
