import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CirclePicker } from 'react-color';


const useStyles = makeStyles((theme) => ({
  modal : {
    width: "50%",
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem"
  },
  header : {
    borderBottom: "3px solid #eb5e28",
    marginBottom: "1rem",
    margin: "0 auto"
  },
  addButton : {
    backgroundColor: "#eb5e28",
    fontWeight: 500
  },
  form : {
    display: "flex",
    flexDirection: "column"
  }

}));

function ProjectModal({ open , handleClose}) {
  const classes = useStyles()
  const [color, setColor] = useState("#f44336");
  const handleColorChange = (newColor, event) => {
    setColor(newColor)
  }
  const createProject = (e) => {
    
  }
  return (
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  >    
  <Paper className={classes.modal} elevation={3}>
    <Typography align="center" className={classes.header} variant = "h4">
      Add a Project
    </Typography>
    <form className={classes.form} onSubmit={createProject}>
      <TextField label="Project Name" name = "projectName" type="text"/> 
    </form>
    <Typography variant="subtitle1">
        Project Color
      </Typography>
    <CirclePicker 
    color={color}
    onChange = {handleColorChange}
    /> 
    <Button className={classes.addButton} variant="contained">
      Submit
    </Button>
  </Paper>
  </Modal>
  )
}

export default ProjectModal