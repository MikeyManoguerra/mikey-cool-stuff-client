import React from 'react';
import Header from '../components/header';
import { shallow } from 'enzyme';
import '../configure-tests'

describe('<Header /> component', () => {
  it('Smoke test', () => {
    shallow(<Header />)
  })

  // it('displays the info pop up', () => {
  //   const moreInfo = 'more-info';
  //   const wrapper = shallow(<Header infoSection={moreInfo} />)
  //   console.log(wrapper.debug());
  //   expect(wrapper.contains(<h3>Welcome!</h3>)).toEqual(true);
  // })
})