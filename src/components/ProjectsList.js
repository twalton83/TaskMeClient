/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  addProjectButton : {
    "&:hover" : {
      backgroundColor: "#eb5e28"
    }

  }
}))

function ProjectsList({ projects }) {
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
        <Grid item xs = {12}>
          <Typography variant = "h2" component="h1">
            Projects
          </Typography>
        </Grid>
        { projects.length > 0 && projects.map((project) => (
          <Grid item xs = {12} sm = {6} md = {4} >
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
        <ProjectModal handleClose = {handleClose} open = {open}/>
      </Grid>
  )
}

export default ProjectsList
