import { v4 as uuidv4 } from 'uuid';

export default class Project {
  constructor(name, color) {
    this.name = name
    this.sections = []
    this.tasks = []
    this.color = color
    this.id = uuidv4()
  }

  addTask(task) {
    this.tasks.push(task)
  }

  addSection(section) {
    this.sections.push(section)
  }

  completeTask(id) {
    this.tasks.forEach(task => {
        return task.id === id ? task.complete() : null
    })
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
