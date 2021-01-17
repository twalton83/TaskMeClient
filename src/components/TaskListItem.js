import { React, useState }  from 'react'
import { isAfter, format } from 'date-fns';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import useStyles from './styles/TaskListItemStyle';
import TaskDetailsModal from './TaskDetailsModal';

export default function TaskListItem({ user, task, completeTask, setUser }) {
  console.log(task)
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
    <ListItem className= { classes.root } key={ task.id } >
      <Accordion className= { classes.accordion }>
        <AccordionSummary>
          <ListItemText className= { pastDue() ? classes.pastDue : null }>
          {task.name}
        </ListItemText>
          <div>
        { (task.priority === 'Medium' || task.priorty === 'High') && (
          <ListItemIcon  className= { classes.icon }>
            <PriorityHighIcon />
          </ListItemIcon>) }
        <ListItemIcon className= { classes.icon }>
          <CheckCircleIcon onClick= { handleClick } className={ classes.checkButton }/>
        </ListItemIcon>
        </div>
        </AccordionSummary> 
        <AccordionDetails>
        <Typography paragraph>
            { task.description }
          </Typography>
        <div className = { classes.accordionFooter }>
        <Typography className = { pastDue() ? classes.pastDue : null }>
            Due: { format(task.dueDate, 'P') }
          </Typography>
          <Button  variant="contained"  onClick = { handleOpen }  >
            Edit
          </Button>
        </div>
        </AccordionDetails>
      </Accordion>
      <TaskDetailsModal user = { user } handleClose={ handleClose } open={ open } task = { task } setUser = { setUser } />    
    </ListItem>
    
  )
}
