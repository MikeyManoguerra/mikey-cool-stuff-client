//state
// props
// eventlisteners
// has class

import React from 'react';
import ExpandedListItem from '../components/expanded-list-item';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<ExpandedListItem /> component', () => {
  it('Smoke test', () => {
   shallow(<ExpandedListItem />)
    
  })
})