import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { CardHeader } from '@material-ui/core';
import useStyles from './styles/ProjectCardStyle';

export default function ProjectCard({ deleteProj,  project }) {
  const classes = useStyles();

  return (
    <Card id = { project.id } key = { project.id }>
      <CardHeader style={ { backgroundColor: project.color.hex } } title = { project.name } />
      <CardContent>

        <Typography paragraph>
        Number of Tasks Left: {project.tasks.filter(t => !t.completed).length }
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button variant="contained">
          <Link className={ classes.link } to={ `/projects/${project.id}` }>
            Details
          </Link>
        </Button>
        { project.name !== "General" &&         <DeleteIcon onClick={ () => deleteProj(project.id) }/>}

      </CardActions>
    </Card>
    
  )
}
