import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '400px',
    height: '400px',
    '@media (max-width: 780px)': {
      width: '100%'
    }
  },
  header: {
    marginBottom: "1rem",
    backgroundColor: "#eb5e28",
  },
  addButton: {
    fontWeight: 500,
    margin: '1rem 0 1rem 0',
    float: "right"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%"
  }

}));

export default useStyles
