import Project from './Project';

describe('Project', () => {
  xit('project instance details are correct', () => {
    expect(new Project("My Project")).toHaveAttribute('name')
    expect(new Project()).toHaveAttribute('tasks')
  })
})