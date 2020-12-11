import React, {useState, useEffect} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Transition } from 'react-transition-group';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  addButton : {
    backgroundColor: "#eb5e28",
    color: "#FFFFFF",
    marginLeft: "85%"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#252422"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}))

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
  const [projects, setProjects] = useState([]);
  const [currProject, setCurrProject] = useState();
  const grabStorage = () => {
    let user;
    if(localStorage.getItem('taskMe') === null){
      user = new User()
    } else {
      user =  JSON.parse(localStorage.getItem('taskMe'))
    }

    return user;
  }
  const [user, setUser] = useState(grabStorage())

  return (
    <section className={classes.root}>
     <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Task.Me
          </Typography>
          <IconButton className={classes.addButton}>
            <AddIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
         <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
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
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <div className={classes.drawerHeader} />
      <Switch>
        <Route exact path="/projects" render = {()=> <ProjectsList projects = { projects } />}/>
        <Route exact path="/projects/:projectName"
          render = {() => <TaskView project={currProject}/>}/>
        <Route exact path="/" render = {() => <HomeView/> }>
        </Route>
      </Switch>
      </main>
    </section>
  )
}

export default App
