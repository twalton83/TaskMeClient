import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
import { findProjectByName } from '../modules/helpers';

function TaskModal({ open, handleClose, projects, setProjects }) {
  const classes = useStyles()
  const [taskName, setTaskName] = useState("");
  const [project, setProject] = useState("General");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState(new Date());
  const [description, setDescription] = useState("");

  const createTask = (e) => {
    e.preventDefault()
    const newTask = new Task(taskName, dueDate, priority, description, uuidv4())
    const projectToUpdate = findProjectByName(projects, project)
    const prevProjects = projects.filter(proj => proj !== projectToUpdate)
    projectToUpdate.addTask(newTask)
    setProjects([...prevProjects, projectToUpdate])
    setTaskName("")
    setDescription("")
    setDueDate(new Date())
    setPriority("Low")
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
  const handleTaskDescChange = (e) => {
    setDescription(e.target.value)
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
          <TextField  label="Description" name="TaskDesc" onChange={ handleTaskDescChange } value={ description }multiline
          rows={ 4 } variant="filled"/>
          <InputLabel id="projects">Project</InputLabel>
          <Select value={ project } id="projects" onChange={ handleSelect }>
            {projects.map(proj => (
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
              autoOk
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="Due-Date"
              label="Due Date"
              value = { dueDate }
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

export default TaskModal
