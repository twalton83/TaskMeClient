const findProject = (user, projectName) => {
  return user.projects.find(project => projectName === project.name)
} 


export {
  findProject 
}