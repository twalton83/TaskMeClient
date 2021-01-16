import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Transition } from 'react-transition-group';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import AddIcon from '@material-ui/icons/Add';
import HomeView from './components/HomeView'
import ProjectsList from './components/ProjectsList'
import TaskView from './components/TaskView';
import User from './modules/User';
import { drawerWidth, useStyles } from './components/styles/AppStyle';
import Task from './modules/Task';
import TaskModal from './components/TaskModal';
import { findProject } from './modules/helpers';

function App() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () =>{
    setModalOpen(false)
  }
  const grabStorage = () => {
    let user;
    if(localStorage.getItem('taskMe') === null) {
      user = new User()
    } else {
      user =  JSON.parse(localStorage.getItem('taskMe'))
    }
    return user;
  }
  const [user, setUser] = useState(grabStorage())





  return (
    <section className={ classes.root }>
     <CssBaseline />
      <AppBar
        position="fixed"
        className={ clsx(classes.appBar, {
          [classes.appBarShift]: open,
        }) }
      >
        <Toolbar className={ classes.toolbar } disableGutters>
          <div className = { classes.navContainer }>
            <IconButton
              color="inherit" 
              aria-label="open drawer"
              onClick={ handleDrawerOpen }
              edge="start"
              className={ clsx(classes.menuButton, open && classes.hide) }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Task.Me
            </Typography>
          </div>
          <IconButton onClick= { handleModalOpen } className={ classes.addButton }>
            <AddIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Drawer
        className={ classes.drawer }
        variant="persistent"
        anchor="left"
        open={ open }
        classes={ {
          paper: classes.drawerPaper,
        } }
      >
         <div className={ classes.drawerHeader }>
          <IconButton onClick={ handleDrawerClose }>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/projects">Projects</Link>
          </ListItem>
        </List>
        <Divider />
        <List />
      </Drawer>
      <main
        className={ clsx(classes.content, {
          [classes.contentShift]: open,
        }) }
      >
        <div className={ classes.drawerHeader } />
        <Switch>
          <Route exact path="/projects" render = { ()=> <ProjectsList user = { user } setUser = { setUser } projects = { user.projects } /> }/>

          <Route exact path="/projects/:projectName"
            render = { routeProps => <TaskView user = { user } setUser = { setUser } project={ findProject(user, routeProps.match.params.projectName) }/> }/>

          <Route exact path="/" render = { () => <HomeView user = { user } setUser = { setUser }  /> } />
        </Switch>
        <TaskModal user = { user } setUser = { setUser } handleClose = { handleModalClose } open = { modalOpen }/>
        </main>
    </section>
  )
}

export default App
