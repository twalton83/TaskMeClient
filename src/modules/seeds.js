import { v4 as uuidv4 } from 'uuid';

import Project from './Project';
import Task from './Task';

function generateProjects() {
  const arr = []
  for (let i = 0; i < 3; i++) { 
    const project = new Project(`Project${i}`, 'blue')
    for(let j = 0; j < 3; j++) {
      project.addTask(new Task(`Task${j}`, null, project, new Date(), 'low', uuidv4()))
    }
    arr.push(project)
  }
  return arr
}


export default generateProjects
