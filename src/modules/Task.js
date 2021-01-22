export default class Task {
  constructor(name, dueDate, priority, description, id) {
    this.name = name
    this.dueDate = dueDate
    this.priority = priority
    this.id = id
    this.completed = false
    this.description = description
  }

  complete() {
    this.completed = !this.completed
  }

  edit(properties) {
    const props = Object.keys(properties)
    const values = Object.values(properties)
    props.forEach((prop, i) => {
      this[prop] = values[i]
    })
  }
}
