//state
// props
// eventlisteners
// has class

import React from 'react';
import { ExpandedListItem } from '../components/expanded-list-item';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<ExpandedListItem /> component', () => {
  it('Smoke test', () => {
   shallow(<ExpandedListItem categories={[]} />)  
  })

  it('takes an object and renders list item ', () => {

    const singleObjectData = {
      name: 'thing',
      postalCode: '12345',
      countryOfOrigin: 'USA',
      categories : ['bugs', 'insects']
    }
    const wrapper = shallow(<ExpandedListItem {...singleObjectData} />)
    
    expect(wrapper.contains(
      <p>12345</p>)).toEqual(true);
    expect(wrapper.contains(<h3>thing</h3>)).toEqual(true);
    expect(wrapper.contains(<p>USA</p>)).toEqual(true);
  })
})