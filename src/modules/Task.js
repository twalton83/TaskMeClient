import { v4 as uuidv4 } from 'uuid';

export default class Task {
  constructor(name, section, dueDate, priority, description) {
    this.name = name
    this.section = section
    this.dueDate = dueDate
    this.priority = priority
    this.id = uuidv4()
    this.completed = false
    this.description = description
  }

  complete() {
    this.completed = true
  }

  edit(properties) {
    const props = Object.keys(properties)
    const values = Object.values(properties)
    props.forEach((prop, i) => {
      this[prop] = values[i]
    })
  }
}
