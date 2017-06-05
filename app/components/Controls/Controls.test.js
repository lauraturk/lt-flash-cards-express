import React from 'react'
import { shallow } from 'enzyme'
import { Controls } from './Controls'

describe('controls', () => {
  const mockFn = jest.fn()

  const wrapper = shallow(<Controls showAnswer={mockFn}
                                    nextCard={mockFn}/>)

  it('should render', () => {
    expect(wrapper.find('.controls-wrapper').length).toEqual(1)
  })

  it('should have two buttons to click', () => {
    const showAnswerButton = wrapper.find('.show-answer')
    const nextButton = wrapper.find('.next')

    showAnswerButton.simulate('click')
    nextButton.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
