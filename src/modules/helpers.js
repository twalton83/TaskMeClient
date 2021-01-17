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


export {
  findProject,
  findTask,
  findProjectByName
}
