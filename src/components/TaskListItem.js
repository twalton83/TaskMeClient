import { React, useState }  from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles/TaskListItemStyle';
import TaskDetailsModal from './TaskDetailsModal';

export default function TaskListItem({ task, completeTask }) {
  const classes = useStyles()

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation()
    completeTask(task)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <ListItem divider className= { classes.root } key={ task.id } >
      <ListItemText onClick = { handleOpen }>
        {task.name}
      </ListItemText>
      <ListItemIcon onClick= { handleClick }>
        <CheckCircleIcon className={ classes.checkButton }/>
      </ListItemIcon>
      <TaskDetailsModal handleClose={ handleClose } open={ open } task = { task } />
    </ListItem>
  )
}
