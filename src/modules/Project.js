export default class Project {
  constructor(name, color, id) {
    this.name = name
    this.sections = []
    this.tasks = []
    this.color = color
    this.id = id
  }

  addTask(task) {
    this.tasks.push(task)
  }

  addSection(section) {
    this.sections.push(section)
  }

  completeTask(task) {
    this.tasks.forEach(t => {
        return t === task ? t.complete() : null
    })
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
