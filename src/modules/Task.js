import { v4 as uuidv4 } from 'uuid';

export default class Task {
  constructor(name, section, project, dueDate, priority, id) {
    this.name = name
    this.section = section
    this.project = project
    this.dueDate = dueDate
    this.priority = priority
    this.id = uuidv4()
    this.completed = false
  }

  complete() {
    this.completed = true
  }
}
