import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import './App.css'
import HomeView from './components/HomeView'
import Sidebar from './components/Sidebar'
import ProjectsList from './components/ProjectsList'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact to="/">
          <HomeView />
        </Route>
        <Route exact to="/projects">
          <ProjectsList />
        </Route>
      </Switch>
    </div>
  )
}

export default App
