import Project from './Project';

const initialProject = new Project('All Tasks', 'orange')

export default class User {
  constructor() {
    this.projects = [initialProject]
  }
}
