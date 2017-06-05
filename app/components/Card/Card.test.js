import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'

describe('card component', () => {
  it('should render in a div', () => {
    const wrapper = shallow(<Card currentCard={{id: 'XYV',
                                                frontCard: 'house',
                                                backCard: 'casa'}}
                                  cardControl={{cardBackHidden: true,
                                                nextCard: false}}
                                  deckControl={{showDeck: false,
                                                matchedDeck: 'purple'}} />)

    expect(wrapper.find('.card').length).toEqual(1)
  })

  it('should render the currentCard', () => {
    const wrapper = shallow(<Card currentCard={{id: 'XYV',
                                                frontCard: 'house',
                                                backCard: 'casa'}}
                                  cardControl={{cardBackHidden: true,
                                                nextCard: false}}
                                  deckControl={{showDeck: false,
                                                matchedDeck: 'purple'}} />)

    expect(wrapper.find('.card-info').length).toEqual(2)
    expect(wrapper.find('.word-info').text()).toEqual('house')
  })

  it('should render the answer in search form', () => {
    const wrapper = shallow(<Card currentCard={{id: 'XYV',
                                                frontCard: 'house',
                                                backCard: 'casa'}}
                                  cardControl={{cardBackHidden: true,
                                                nextCard: false}}
                                  deckControl={{showDeck: false,
                                                matchedDeck: 'purple'}} />
                            )

    expect(wrapper.find('.answer-info').length).toEqual(1)
  })

  it('should render w/out the answer in card deck', () => {
    const wrapper = shallow(<Card currentCard={{id: 'XYV',
                                                frontCard: 'house',
                                                backCard: 'casa'}}
                                  cardControl={{cardBackHidden: true,
                                                nextCard: false}}
                                  deckControl={{showDeck: true,
                                                matchedDeck: 'purple'}} />
                            )

    expect(wrapper.find('.answer-info').length).toEqual(0)
  })

  it('should have a cancel button', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<Card currentCard={{id: 'XYV',
                                                frontCard: 'house',
                                                backCard: 'casa'}}
                                  cardControl={{cardBackHidden: true,
                                                nextCard: false}}
                                  deckControl={{showDeck: true,
                                                matchedDeck: 'purple'}}
                                  cancelCard={mockFunc}             />
                            )
    const cancelButton = wrapper.find('button')
    cancelButton.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
  })
})
