import React from 'react';
import {NavBar} from '../components/nav-bar'
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<NavBar /> component', () => {
  it('Smoke test', () => {
   shallow(<NavBar />)
    
  })
})