import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  addProjectButton: {
    "&:hover": {
      backgroundColor: "#eb5e28"
    },
    margin: "0 auto"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))

export default useStyles
