import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

describe('home message', () => {
  it('should render a welcome message', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find('.welcome-link').length).toEqual(2)
    expect(wrapper.find('.welcome-msg').length).toEqual(1)
  })
})
