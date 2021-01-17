import { v4 as uuidv4 } from 'uuid';

import Project from './Project';
import Task from './Task';

function generateProjects() {
  const arr = []
  for (let i = 0; i < 3; i++) { 
    const project = new Project(`Project${i}`, { "hsl": { "h": 339.60591133004925,"s": 0.8218623481781375,"l": 0.5156862745098039,"a": 1 },"hex": "#e91e63","rgb": { "r": 233,"g": 30,"b": 99,"a": 1 },"hsv": { "h": 339.60591133004925,"s": 0.871244635193133,"v": 0.9137254901960784,"a": 1 },"oldHue": 4.105263157894738,"source": "hex" })
    for(let j = 0; j < 3; j++) {
      project.addTask(new Task(`Task${j}`, null, new Date(), 'low', ' test description '))
    }
    arr.push(project)
  }
  return arr
}


export default generateProjects
