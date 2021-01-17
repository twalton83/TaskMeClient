import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  icon: {
    minWidth: '0'
  },

  checkButton: {
   "&:hover": {
     fill: "#eb5e28"
   }
 },
 pastDue: {
   color: "red"
 }

}));

export default useStyles
