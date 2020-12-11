import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CirclePicker } from 'react-color';


const useStyles = makeStyles((theme) => ({

  header : {
    marginBottom: "1rem",
    margin: "0 auto"
  },
  addButton : {
    fontWeight: 500,
    margin: '1rem 0 1rem 0',
    float: "right"
  },
  form : {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  }

}));

function ProjectModal({ open , handleClose}) {
  const classes = useStyles()
  const [color, setColor] = useState("#f44336");
  const handleColorChange = (newColor, event) => {
    setColor(newColor)
  }
  const createProject = (e) => {
    e.preventDefault()
  }
  const [fullWidth, setFullWidth] = useState(true);
  return (
  <Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  >    
  <DialogTitle
  style =  {{ backgroundColor: color.hex}}
  >
    Add A Project
  </DialogTitle>
  <DialogContent>
    <form className={classes.form} onSubmit={createProject}>
      <TextField label="Project Name" name = "projectName" type="text"/> 
    </form>
    <Typography variant="subtitle1">
      Color
    </Typography>
    <CirclePicker 
    color={color}
    onChange = {handleColorChange}
    /> 
    <Button 
    style={{backgroundColor: color.hex}} className={classes.addButton} >
      Submit
    </Button>
    </DialogContent>
  </Dialog>
  )
}

export default ProjectModal