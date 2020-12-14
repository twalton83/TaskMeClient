import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function HomeView({ projects }) {
  return (
    <Grid container>
      <Grid item xs = { 12 }>
        <Typography variant="h2" component="h1">
          Welcome to Task.Me
        </Typography>
        <Typography paragraph>
          Here you can find your upcoming tasks and pin your most important projects!
        </Typography>
      </Grid>
 
    </Grid>
  )
}

