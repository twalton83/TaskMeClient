import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import TaskViewSection from './TaskViewSection'; 
import TaskListItem from './TaskListItem';

export default function HomeView({ user, setUser }) {
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
          Upcoming Tasks
        </Typography>
        <Grid item xs= { 12 } sm = { 10 } md = { 8 }>
          {user.projects.map(project => (
            <TaskViewSection user = { user } setUser = { setUser } tasks = { project.tasks } project = { project } />
          ))}
        </Grid>

        <Typography variant="h3">
          Projects
        </Typography>
          
        <Grid container spacing = { 3 }>
          {user.projects.map(project => (
            <Grid key={ project.id } item xs={ 12 } sm={ 6 } md={ 4 } >
              <ProjectCard project={ project } />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </Grid>
  )
}

