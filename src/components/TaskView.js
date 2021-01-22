import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TaskViewSection from './TaskViewSection';
import { findProject } from '../modules/helpers';
import useStyles from './styles/TaskViewStyle';

export default function TaskView({ projects, setProjects, project }) {
  const classes = useStyles()
  const completeTask = (taskId) => {
    const projectToUpdate = findProject(projects, project.id)
    projectToUpdate.completeTask(taskId)
    const prevProjects = projects.filter(proj => proj !== project)
    setProjects([... prevProjects, projectToUpdate])
  }
  const incompleteTasks = project.tasks.filter(task => !task.completed)
  const completedTasks = project.tasks.filter(task => task.completed)

 
  
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs = { 10 }>
        <Typography variant="h2" component ="h1" align="center">{ project.name }</Typography>
      </Grid>
      <Grid item xs = { 12 } md = { 8 } className= { classes.incompletedTasks }>
        <TaskViewSection projects = { projects } setProjects = { setProjects } completeTask = { completeTask } tasks = { incompleteTasks } project = { project } />
      </Grid>

      {
       completedTasks.length > 0 &&
         <Grid item xs = { 12 } md = { 8 } className= { classes.completedTasks }>
        <Accordion>
          <AccordionSummary
           expandIcon={ <ExpandMoreIcon /> }
           aria-controls="panel1a-content"
           id="panel1a-header">
            <Typography variant="h6" align="center"> Completed Tasks </Typography>
          </AccordionSummary>
       
          <AccordionDetails>
            <TaskViewSection className={ classes.incompleteTaskSection } projects = { projects } completeTask = { completeTask } tasks = { completedTasks } project = { project } setProjects = { setProjects } /> 
          </AccordionDetails>
        </Accordion>
      </Grid>
       }
    </Grid>
  )
}
