import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../../../src/components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  function render() {
    return mount(<App />);
  }

  it('', () => {
    
  })
})
