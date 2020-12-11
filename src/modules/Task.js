export default class Task {
  constructor(name){
    this.name = name
    this.section = null;
    this.project = null;
    this.dueDate = new Date().getDate()
  }
}