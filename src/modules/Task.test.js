import Task from './Task';

describe('Task', () => {
  xit('project instance details are correct', () => {
    expect(new Task("My Task")).toHaveAttribute('name')
    expect(new Task()).toHaveAttribute('tasks')
  })
})
