import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useStyles from './styles/TaskListItemStyle';

export default function TaskListItem({ task }) {
  const classes = useStyles()
  const handleClick = (e) => {
    console.log(e.target.value)
  }
  return (
    <ListItem divider className= { classes.root }>
      <ListItemText>
        {task.name}
      </ListItemText>
      <ListItemIcon onClick= { handleClick }>
        <CheckCircleIcon className={ classes.checkButton }/>
      </ListItemIcon>
    </ListItem>
  )
}
