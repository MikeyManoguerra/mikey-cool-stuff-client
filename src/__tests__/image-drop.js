import React from 'react';
import ImageDrop from '../components/image-drop';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<ImageDrop /> component', () => {
  it('Smoke test', () => {
   shallow(<ImageDrop />)
    
  })
})