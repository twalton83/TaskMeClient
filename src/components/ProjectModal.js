import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CirclePicker } from 'react-color';
import Project from '../modules/Project';
import useStyles from './styles/ProjectModalStyle';

function ProjectModal({ open , handleClose, setProjects, projects }) {
  const classes = useStyles()
  
  const [projectName, setProjectName] = useState("");
  const [color, setColor] = useState({ hex: "#f44336" });
  const [error, setError] = useState(null);
  const handleColorChange = (newColor) => {
    setColor(newColor)
  }
  const createProject = (e) => {
    e.preventDefault()
    if (projectName === "") {
      setError(true)
      return
    }
    const project = new Project(projectName, color, uuidv4())
    setProjects([... projects, project])
    setError(false)
    setProjectName("")
    handleClose()
  }
  const handleProjectNameChange = (e) =>{
    setError(false)
    setProjectName(e.target.value)
  }
 
  return (
    <Dialog
    open={ open }
    onClose={ handleClose }
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >    
    <DialogTitle
    style =  { { backgroundColor: color.hex } }
    >
      Add A Project
    </DialogTitle>
    <DialogContent>
      <form className={ classes.form } onSubmit={ createProject }>
        <TextField error = { error }
        helperText = { error ? "A name is required." : null } required label="Project Name" name = "projectName" type="text" onChange={ handleProjectNameChange } value={ projectName }/> 
      </form>
      <Typography variant="subtitle1">
        Color
      </Typography>
      <CirclePicker 
      color={ color }
      onChange = { handleColorChange }
      /> 
      <Button 
      style={ { backgroundColor: color.hex } } className={ classes.addButton } 
      onClick={ createProject }
      >
        Submit
      </Button>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal
