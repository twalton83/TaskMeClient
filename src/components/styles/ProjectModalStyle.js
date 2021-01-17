import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  header: {
    marginBottom: "1rem",
    margin: "0 auto"
  },
  addButton: {
    fontWeight: 500,
    margin: '1rem 0 1rem 0',
    float: "right"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  }

}));

export default useStyles
