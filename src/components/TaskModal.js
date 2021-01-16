import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './styles/TaskModalStyle';
import Task from '../modules/Task';
import { findProject } from '../modules/helpers';

function TaskModal({ open, handleClose, user, setUser }) {
  const classes = useStyles()
  const [taskName, setTaskName] = useState("");
  const [project, setProject] = useState("All Tasks");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState(null);
  const [section, setSection] = useState(null);

  const createTask = (e) => {
    e.preventDefault()
    const newTask = new Task(taskName, section, project, dueDate, priority)
    const projectToUpdate = findProject(user, project)
    // spread the rest of the user
    // find the project to update
    // replace it with that project 
    const prevProjects = user.projects.filter(proj => proj !== projectToUpdate)
    projectToUpdate.addTask(newTask)
    setUser({ ...user, projects: [...prevProjects, projectToUpdate] })
    setTaskName("")
    handleClose()
  }

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleSelect = (e) => {
    setProject(e.target.value)
  }

  const handlePrioritySelect = (e) => {
    setPriority(e.target.value)
  }


  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      aria-labelledby="add-task"
      aria-describedby="Add a task modal"
    >
      <DialogTitle className={ classes.header }>
        Add A Task
    </DialogTitle>
      <DialogContent  className={ classes.root } >
        <form className={ classes.form } onSubmit={ createTask }>
          <TextField label="Task" name="TaskName" type="text" onChange={ handleTaskNameChange } value={ taskName } />
          <InputLabel id="projects">Project</InputLabel>
          <Select value={ project } id="projects" onChange={ handleSelect }>
            {user.projects.map(proj => (
              <MenuItem key= { proj.id } value={ proj.name }>{proj.name}</MenuItem>
            ))}
          </Select>
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
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
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

export default TaskModal
