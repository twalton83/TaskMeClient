import Section from './Section';

describe('Section', () => {
  xit('Section instance details are correct', () => {
    expect(new Section("My Section")).toHaveAttribute('name')
    expect(new Section()).toHaveAttribute('tasks')
  })
})
