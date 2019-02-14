import React from 'react';
import Header from '../components/header';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<Header /> component', () => {
  it('Smoke test', () => {
   shallow(<Header />)
    
  })
})