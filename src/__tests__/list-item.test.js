import React from 'react';
import { ListItem } from '../components/list-item';
import { shallow } from 'enzyme';
import { handleExpandedItem } from '../actions/display';

import '../configure-tests'

describe('<ListItem /> component', () => {


  it('Smoke test', () => {
    shallow(<ListItem />)
  })
  it('takes an object and renders list item ', () => {

    const singleObjectData = {
      name: 'thing',
      postalCode: '12345',
      countryOfOrigin: 'USA',
    }
    const wrapper = shallow(<ListItem {...singleObjectData} />)

    expect(wrapper.contains(
      <p>12345</p>)).toEqual(true);
    expect(wrapper.contains(<h3>thing</h3>)).toEqual(true);
    expect(wrapper.contains(<p>USA</p>)).toEqual(true);
  })
  it('simulates click events', () => {
    const fakeDispatch = jest.fn();
    const id = 10
    const wrapper = shallow(<ListItem dispatch={fakeDispatch} id={id} />)
    wrapper.find('button').simulate('click')
    console.log(wrapper.debug())
    expect(fakeDispatch).toHaveBeenCalledWith(handleExpandedItem(id))
  })

}) 