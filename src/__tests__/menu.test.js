import React from 'react';
import { Menu } from '../components/menu';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<Menu /> component', () => {
  it('Smoke test', () => {
    shallow(<Menu />)

  })
})