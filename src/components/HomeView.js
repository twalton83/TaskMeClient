import { React, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProjectCard from './ProjectCard';
import TaskViewSection from './TaskViewSection'; 
import ProjectModal from './ProjectModal';
import { findProject } from '../modules/helpers';
import useStyles from './styles/HomeViewStyle';

export default function HomeView({ projects, setProjects, deleteProj }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const homeCompleteTask = (task) => {
    const project = projects.filter(proj => proj.tasks.includes(task))[0]
    const projectToUpdate = findProject(projects, project.id)
    projectToUpdate.completeTask(task)
    const prevProjects = projects.filter(proj => proj !== project)
    setProjects([... prevProjects, projectToUpdate])
  }

  const upcomingTasks =  projects.map(project => (
    <TaskViewSection key = { project.id } projects = { projects } setProjects = { setProjects } tasks = { project.tasks.filter(task => !task.completed) } project = { project } completeTask = { homeCompleteTask } />
  ))

  const projectCards = projects.map(project => (
    <Grid key={ project.id } item xs={ 12 } sm={ 6 } md={ 4 } >
      <ProjectCard deleteProj = { deleteProj } project={ project } />
    </Grid>
  ))

  return (
    <Grid container>
      <Grid item xs={ 12 }>
        <Typography variant="h2" component="h1">
          Welcome to Task.Me
        </Typography>
        <Typography paragraph>
          Here you can find your upcoming tasks and projects!
        </Typography>
        <Typography variant="h3">
          Upcoming Tasks
        </Typography>
        <Grid item xs= { 12 } sm = { 10 } md = { 8 } className = { classes.upcomingTasks }>
          { upcomingTasks }
        </Grid>

        <Typography variant="h3">
          Projects
        </Typography>
          
        <Grid container spacing = { 3 } className= { classes.projectsList }>
        { projects.length === 0 &&
        <Grid item container direction ="column" justify = "space-evenly" alignItems="flex-start">
          <Typography variant="h5"> You do not have any projects yet!</Typography>
          <Button className={ classes.addProjectButton }
            variant="contained"
            onClick={ handleOpen }
          >
            Add A Project
          </Button>
        </Grid>
      }
      <ProjectModal projects = { projects } setProjects={ setProjects } handleClose={ handleClose } open={ open } />
      
      { projectCards }
      </Grid>

      </Grid>
    </Grid>
  )
}

