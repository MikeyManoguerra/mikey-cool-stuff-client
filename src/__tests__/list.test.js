import React from 'react';
import List from '../components/list';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<List/> component', () => {
  const seedListItems = [];
  beforeAll(() => {
    for (let i = 0; i < 5; i++){
      seedListItems.push({
        name:'name'
      }
      );
    }
  })
  
  
  it('Smoke test', () => {
   shallow(<List />)
    

  })
})