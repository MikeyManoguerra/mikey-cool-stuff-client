import React from 'react';
import ListItem from '../components/list-item';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<ListItem /> component', () => {
  it('Smoke test', () => {
   shallow(<ListItem />)
    
  })
})