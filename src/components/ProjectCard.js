import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { CardHeader } from '@material-ui/core';
import useStyles from './styles/ProjectCardStyle';

export default function ProjectCard({ project }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader style={{backgroundColor: project.color.hex}} title = {project.name}>
      </CardHeader>
      <CardContent>

        <Typography paragraph>
          Projects - {project.tasks.length}
        </Typography>
        <Button variant="contained">
          <Link className={classes.link} to={`/projects/${project.name}`}>
            Details
          </Link>
        </Button>
      </CardContent>
    </Card>
    
  )
}
