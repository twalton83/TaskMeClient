import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './styles/TaskDetailsModalStyle';
import { findProject } from '../modules/helpers';

function TaskDetailsModal({ open, handleClose, task, user, setUser }) {
  const classes = useStyles()
  const [taskName, setTaskName] = useState(task.name);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [section, setSection] = useState(task.section);
  const [taskDescription, setTaskDescription] = useState("");

  const editTask = (e) => {
    e.preventDefault()
    task.edit({
      taskName, priority, dueDate, taskDescription
    })
    console.log(task)
    const projectToUpdate = findProject(user, task.project.id)
    console.log(projectToUpdate)
    const prevProjects = user.projects.filter(proj => proj.id !== projectToUpdate.id)
    setUser({ ...user, projects: [... prevProjects, projectToUpdate] })
    handleClose()
  }

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }
  const handleTaskDescChange = (e) => {
    setTaskDescription(e.target.value)
  }

  const handleSelect = (e) => {
    e.preventDefault()
  }

  const handlePrioritySelect = (e) => {
    setPriority(e.target.value)
  }


  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      aria-labelledby="edit-task"
      aria-describedby="Edit a task modal"
    >
      <DialogTitle className={ classes.header }>
        Task Details
    </DialogTitle>
      <DialogContent  className={ classes.root } >
        <form className={ classes.form } onSubmit={ editTask }>
          <TextField label="Task" name="TaskName" type="text" onChange={ handleTaskNameChange } value={ taskName } />
          <TextField label="Description" name="TaskDesc" onChange={ handleTaskDescChange } value={ taskDescription }multiline
          rows={ 4 } variant="filled"/>
          <InputLabel id="priority">Priority</InputLabel>
          <Select value={ priority } id="priority" onChange={ handlePrioritySelect }>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
          <MuiPickersUtilsProvider utils={ DateFnsUtils }>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="Due-Date"
              label="Due Date"
              KeyboardButtonProps={ {
                'aria-label': 'change date',
              } }
              onChange={ setDueDate }
            />
          </MuiPickersUtilsProvider>
          <Button type="submit"
              className={ classes.submitButton }>
              Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDetailsModal
