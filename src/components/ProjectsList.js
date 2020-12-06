/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

function ProjectsList({ projects }) {
  return (
      <Grid container spacing = {3}>
        <Grid item xs = {12}>
          <Typography variant = "h2" component="h1">
            Projects
          </Typography>
        </Grid>
        {projects.map((project) => (
          <Grid item xs = {12} sm = {6} md = {4} >
            <ProjectCard project = {project}/>
          </Grid>
        ))}

      </Grid>


  )
}

export default ProjectsList
