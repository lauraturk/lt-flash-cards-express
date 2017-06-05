import React from 'react'
import { shallow } from 'enzyme'
import { Word } from './Word'

describe('word', () => {
  it('should render the words', () => {
    const wrapper = shallow(<Word word={'balloons'}/>)

    expect(wrapper.find('.word').length).toEqual(1)
    expect(wrapper.find('.word').text()).toEqual('balloons')
  })

  it('should have an onclick function', () => {
    const mockFun = jest.fn()
    const wrapper = shallow(<Word handleWord={mockFun}/>)

    wrapper.find('.word').simulate('click')
    expect(mockFun).toHaveBeenCalledTimes(1)
  })
})
