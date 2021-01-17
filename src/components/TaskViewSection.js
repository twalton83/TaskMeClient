import React from 'react'
import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import useStyles from './styles/TaskViewSectionStyle';
import TaskListItem from './TaskListItem';

export default function TaskViewSection({ tasks, completeTask, user, setUser }) {
  const classes = useStyles()
  return (
      <List className={ classes.root } >
        { tasks.map(task => (         
            <TaskListItem user =  { user } completeTask = { completeTask }  key = { task.id } task = { task } setUser = { setUser } />
        ))}
      </List>
  )
}
