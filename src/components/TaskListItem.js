import { React, useState }  from 'react'
import { isAfter } from 'date-fns';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
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

  const pastDue = () => isAfter(new Date(), task.dueDate)



  return (
    <ListItem divider className= { classes.root } key={ task.id } >
      <ListItemText className= { pastDue() ? classes.pastDue : null } onClick = { handleOpen }>
        {task.name}
      </ListItemText>
      <div>
      { (task.priority === 'Medium' || task.priorty === 'High') && (
        <ListItemIcon  className= { classes.icon }>
          <PriorityHighIcon />
        </ListItemIcon>) }
      <ListItemIcon onClick= { handleClick }  className= { classes.icon }>
        <CheckCircleIcon className={ classes.checkButton }/>
      </ListItemIcon>
      </div>
      <TaskDetailsModal handleClose={ handleClose } open={ open } task = { task } />
    </ListItem>
  )
}
