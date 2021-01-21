const findProject = (projects, projectId) => {
  return  projects.find(project => projectId === project.id)
} 

const findProjectByName = (projects, projectName) => {
  return projects.find(project => projectName === project.name)
}

const findProjectByTask = (projects, task) => {
  return projects.filter(project => {
    return project.tasks.includes(task)
  })[0]
}

const findTask = (project, taskId) => {
  const task = project.filter(t => t.id === taskId)[0];
  return task
} 

const setLocalStorage = (projects) => {
  localStorage.setItem('taskMe', JSON.stringify(projects))
}

const fetchLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('taskMe'))
  return data
}

export {
  findProject,
  findTask,
  findProjectByName,
  findProjectByTask,
  fetchLocalStorage,
  setLocalStorage
}
