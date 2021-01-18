import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  incompletedTasks: {
    minHeight: "50vh"
  },
  incompleteTaskSection: {
    width: "100%",
    backgroundColor: "red"
  }
}));

export default useStyles
