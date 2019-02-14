//state
// props
// eventlisteners
// has class

import React from 'react';
import App from '../components/App';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<App /> component', () => {
  it('Smoke test', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
  })
})