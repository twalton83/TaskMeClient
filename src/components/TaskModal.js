import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Project from '../modules/Project';
import useStyles from './styles/TaskModalStyle';
import Task from '../modules/Task';

function TaskModal({ open , handleClose, user }) {
  const classes = useStyles()
  const [taskName, setTaskName] = useState("");
  const [project, setProject] = useState(null);
  const [priority, setPriority] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [section, setSection] = useState(null);

  const createTask = (e) => {
    e.preventDefault()
    const newTask = new Task(taskName, section, project, dueDate, priority)
    // push task to relevant project or "all" project
    user[project].addTask(newTask)
    handleClose()
  }
  const handleTaskNameChange = (e) =>{
    setTaskName(e.target.value)
  }
 
  return (
    <Dialog
    open={ open }
    onClose={ handleClose }
    aria-labelledby="add-task"
    aria-describedby="Add a task modal"
    >    
    <DialogTitle className = { classes.header }>
      Add A Task
    </DialogTitle>
    <DialogContent>
      <form className={ classes.form } onSubmit={ createTask }>
        <TextField label="Task Name" name = "TaskName" type="text" onChange={ handleTaskNameChange } value={ taskName }/> 
        <Button 
        className={ classes.submitButton }>
        Submit
        </Button>
      </form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal
