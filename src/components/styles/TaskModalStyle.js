import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    marginBottom: "1rem"
  }

}));

export default useStyles
