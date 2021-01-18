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
 },
 accordion: {
  width: "100%"
 },
 accordionSummary: {
  display: "flex",
  flexDirection: "column"
 },
 accordionFooter: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: 0
 }

}));

export default useStyles
