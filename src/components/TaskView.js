import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TaskViewSection from './TaskViewSection';
import { findProject } from '../modules/helpers';

export default function TaskView({ user, setUser, project }) {
  const completeTask = (taskId) => {
    const projectToUpdate = findProject(user, project.name)
    projectToUpdate.completeTask(taskId)
    const prevProjects = user.projects.filter(proj => proj !== project)
    setUser({ ...user, projects: [... prevProjects, projectToUpdate] })
  }
  
  
  const incompleteTasks = project.tasks.filter(task => !task.completion)
  const completedTasks = project.tasks.filter(task => task.completion)
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs = { 10 }>
        <Typography variant="h2" component ="h1" align="center">{ project.name }</Typography>
      </Grid>
      <Grid item xs = { 12 } md = { 8 }>
        <TaskViewSection completeTask = { completeTask } tasks = { incompleteTasks } project = { project } />
      </Grid>

      <Grid item xs = { 10 }>
        <Typography variant="h6" align="center"> Completed Tasks </Typography>
      </Grid>
      <Grid item xs = { 12 } md = { 8 }>
        <TaskViewSection completeTask = { completeTask } tasks = { completedTasks } project = { project } />
      </Grid>
    </Grid>
  )
}
