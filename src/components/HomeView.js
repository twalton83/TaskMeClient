import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function HomeView() {
  return (
    <div>
      <Typography variant="h2" component="h1">
        Welcome to Task.Me
      </Typography>
      <Typography paragraph>
        Here you can find your upcoming tasks and pin your most important projects!
      </Typography>
    </div>
  )
}

