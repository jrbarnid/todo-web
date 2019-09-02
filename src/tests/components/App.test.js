import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { expect } from 'chai'
import App from '../../../src/components/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});

describe('<App />', () => {
  function render() {
    return mount(<App />)
  }

  it('Adds a task when + is clicked', () => {
    const wrapper = render()
    wrapper.find('#task-add').simulate('click')
    expect(wrapper.find('#task-0')).to.have.lengthOf(1)
  })

  it('Adds a second task when + is clicked', () => {
    const wrapper = render()
    wrapper.find('#task-add').simulate('click')
    wrapper.find('#task-add').simulate('click')
    expect(wrapper.find('#task-1')).to.have.lengthOf(1)
  })

  it('Removes a task when - is clicked', () => {
    const wrapper = render()
    wrapper.find('#task-add').simulate('click')
    expect(wrapper.find('#task-0')).to.have.lengthOf(1)

    wrapper.find('#task-remove-0').simulate('click')
    expect(wrapper.find('#task-0')).to.have.lengthOf(0)
  })

  it('Removes the first task when - is clicked on the first item and 2 tasks exist', () => {
    const wrapper = render()
    wrapper.find('#task-add').simulate('click')
    wrapper.find('#task-add').simulate('click')
    expect(wrapper.find('#task-1')).to.have.lengthOf(1)

    wrapper.find('#task-remove-0').simulate('click')
    expect(wrapper.find('#task-0')).to.have.lengthOf(0)
    expect(wrapper.find('#task-1')).to.have.lengthOf(1)
  })

  it('Removes the last task when - is clicked on the last item and 2 tasks exist', () => {
    const wrapper = render()
    wrapper.find('#task-add').simulate('click')
    wrapper.find('#task-add').simulate('click')
    expect(wrapper.find('#task-1')).to.have.lengthOf(1)

    wrapper.find('#task-remove-1').simulate('click')
    expect(wrapper.find('#task-0')).to.have.lengthOf(1)
    expect(wrapper.find('#task-1')).to.have.lengthOf(0)
  })
})
