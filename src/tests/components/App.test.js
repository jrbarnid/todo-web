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
})
