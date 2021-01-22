import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route, Link, NavLink } from 'react-router-dom'
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
import { useStyles } from './components/styles/AppStyle';
import TaskModal from './components/TaskModal';
import { findProject, setLocalStorage, fetchLocalStorage } from './modules/helpers';
import Project from './modules/Project';
import Task from './modules/Task';

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
    let projectsData;
    if(localStorage.getItem('taskMe') === null) {
      projectsData = [new Project('General', { hex: '#eb5e28' }, uuidv4())]
    } else {
      projectsData =  fetchLocalStorage()
      projectsData = projectsData.map(p => {
        const proj = new Project(p.name, p.color, p.id)
        p.tasks.forEach(t => {
          const task =  new Task(t.name, new Date(t.dueDate), t.priority, t.description, t.id) 
          task.completed = t.completed
          proj.addTask(task)
        })
        return proj
      })
    }
    return projectsData;
  }
  const [projects, setProjects] = useState(grabStorage())

  const deleteProj = (projectId) => {
    const projectToRemove = findProject(projects, projectId)
    const prevProjects = projects.filter(proj => proj !== projectToRemove)
    setProjects([... prevProjects])
  }

  useEffect(() => {
    setLocalStorage(projects)
  }, [projects])

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
            <Typography variant="h6" noWrap className={ classes.title }>
              <NavLink to="/">
                Task.Me
              </NavLink>

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
            <Typography>
              <Link className = { classes.drawerLink } to="/">
                Home
              </Link>
            </Typography>
          </ListItem>

          <ListItem>
            <Typography>
              <Link className = { classes.drawerLink } to="/projects">
                Projects
              </Link>
            </Typography>
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
          <Route exact path="/projects" render = { ()=> <ProjectsList setProjects= { setProjects } projects = { projects } deleteProj = { deleteProj } /> }/>

          <Route exact path="/projects/:projectId"
            render = { routeProps => <TaskView projects = { projects } setProjects = { setProjects } project={ findProject(projects, routeProps.match.params.projectId) }/> }/>

          <Route exact path="/" render = { () => <HomeView projects =  { projects } setProjects = { setProjects }  deleteProj = { deleteProj } /> } />
        </Switch>
        <TaskModal projects =  { projects } setProjects = { setProjects }  handleClose = { handleModalClose } open = { modalOpen }/>
        </main>
    </section>
  )
}

export default App
