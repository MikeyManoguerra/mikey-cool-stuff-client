//state
// props
// eventlisteners
// has class

import React from 'react';
import { About } from '../components/about';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<About /> component', () => {
  it('Smoke test', () => {
    shallow(<About />)

  })
})