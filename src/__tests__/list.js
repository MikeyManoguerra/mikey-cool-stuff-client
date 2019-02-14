import React from 'react';
import List from '../components/list';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<List/> component', () => {
  it('Smoke test', () => {
   shallow(<List />)
    
  })
})