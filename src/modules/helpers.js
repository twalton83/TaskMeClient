const findProject = (user, projectId) => {
  return user.projects.find(project => projectId === project.id)
} 

const findProjectByName = (user, projectName) => {
  return user.projects.find(project => projectName === project.name)
}

const findProjectByTask = (user, task) => {
  return user.projects.filter(project => {
    return project.tasks.includes(task)
  })[0]
}

const findTask = (project, taskId) => {
  const task = project.filter(t => t.id === taskId)[0];
  return task
} 

const setLocalStorage = (user) => {
  localStorage.setItem('taskMe', JSON.stringify(user))
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
