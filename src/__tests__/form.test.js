import React from 'react';
import Form from '../components/form';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<Form /> component', () => {
  it('Smoke test', () => {
   shallow(<Form />)
    
  })
})