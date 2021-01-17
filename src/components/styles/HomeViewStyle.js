import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  upcomingTasks: {
    minHeight: "30vh",
  },
  addProjectButton: {
    "&:hover": {
      backgroundColor: "#eb5e28"
    },
    margin: "0 auto"
  },
  projectsList: {
    minHeight: "30vh"
  }
}))

export default useStyles
