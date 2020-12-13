import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  addProjectButton : {
    "&:hover" : {
      backgroundColor: "#eb5e28"
    }

  }
}))

export default useStyles