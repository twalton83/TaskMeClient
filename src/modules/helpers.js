const findProject = (user, projectId) => {
  return user.projects.find(project => projectId === project.id)
} 

const findProjectByName = (user, projectName) => {
  return user.projects.find(project => projectName === project.name)
}

const findTask = (project, taskId) => {
  const task = project.filter(t => t.id === taskId)[0];
  return task
} 

const setLocalStorage = (user) => {
  localStorage.setItem('taskMe', JSON.stringify(user))
}

const fetchLocalStorage = () => {
  return JSON.parse(localStorage.getItem('taskMe'))
}

export {
  findProject,
  findTask,
  findProjectByName,
  fetchLocalStorage,
  setLocalStorage
}
