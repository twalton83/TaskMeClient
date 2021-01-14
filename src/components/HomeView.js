import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import TaskViewSection from './TaskViewSection'; 
import TaskListItem from './TaskListItem';

export default function HomeView({ projects }) {
  return (
    <Grid container>
      <Grid item xs={ 12 }>
        <Typography variant="h2" component="h1">
          Welcome to Task.Me
        </Typography>
        <Typography paragraph>
          Here you can find your upcoming tasks and pin your most important projects!
        </Typography>
        <Typography variant="h3">
          All Tasks
        </Typography>
        <Grid item xs= {12} sm = {10} md = {8}>
          {projects.map(project => (
            <TaskViewSection tasks = { project.tasks }/>
          ))}
        </Grid>

        <Typography variant="h3">
          Projects
        </Typography>
          
        <Grid container spacing = { 3 }>
          {projects.map(project => (
            <Grid key={ project.id } item xs={ 12 } sm={ 6 } md={ 4 } >
              <ProjectCard project={ project } />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </Grid>
  )
}

