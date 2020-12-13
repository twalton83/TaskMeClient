/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard';
import useStyles from './styles/ProjectListStyle';



function ProjectsList({ projects, setUser }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }
  return (
      <Grid container spacing = {3}>
        <Grid container>
          <Grid  item xs = {6}>
            <Typography item xs= {6} variant = "h2" component="h1">
              Projects
            </Typography>
          </Grid>
          <Grid  item xs = {6}>
            { projects.length === 0 &&
              <Button item xs= {6} className={classes.addProjectButton}
              variant="contained"
              onClick = {handleOpen}
              >
                Add A Project
              </Button>
            }
          </Grid> 
        </Grid>
        { projects.length > 0 && projects.map((project) => (
          <Grid key={project.id} item xs = {12} sm = {6} md = {4} >
            <ProjectCard project = {project}/>
          </Grid>
        ))}
        { projects.length === 0 && 
        <Grid>
          <Typography variant = "h5"> You do not have any projects yet!</Typography>
          <Button className={classes.addProjectButton}
          variant="contained"
          onClick = {handleOpen}
          >
            Add A Project
          </Button>
        </Grid>       
        }   
        <ProjectModal setUser = {setUser} handleClose = {handleClose} open = {open}/>
      </Grid>
  )
}

export default ProjectsList
