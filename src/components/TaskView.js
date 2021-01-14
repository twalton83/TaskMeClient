import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TaskViewSection from './TaskViewSection';
import TaskListItem from './TaskListItem';


export default function TaskView({ project }) {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs = { 10 }>
        <Typography variant="h2" component ="h1" align="center">{project.name}</Typography>
      </Grid>
      <Grid item xs = { 12 } md = { 8 }>
        <TaskViewSection tasks = { project.tasks }/>
      </Grid>

    </Grid>
  )
}
