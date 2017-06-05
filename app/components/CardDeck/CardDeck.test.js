import React from 'react'
import { mount, shallow } from 'enzyme'
import { CardDeck } from './CardDeck'




describe('card deck component', () => {
  const currentCardMock = {id: 'XYV',
                    frontCard: 'house',
                     backCard: 'casa'}

  const deckControlMock = {showDeck: false,
                        matchedDeck: 'purple'}

  const cardControlMock = {cardBackHidden: true,
                                 nextCard: false}

  const currentDeckMock = {'fun': [currentCardMock], 'hat':[currentDeckMock]}

  const mockFn = jest.fn()

  const wrapper = mount(<CardDeck currentDeck={currentCardMock}
                        deckControl={deckControlMock}
                        cardControl={cardControlMock}
                        currentDeck={currentDeckMock}
                        showDeck={mockFn}
                        nextCard={mockFn}
                        />)

  it('should render in a div', () => {

    expect(wrapper.find('.decks').length).toEqual(1)
  })

  it('should render the names of current decks', () => {

    expect(wrapper.find('.deck-name').length).toEqual(2)
    expect(wrapper.find('.deck-name').first().text()).toEqual('fun')
  })

  it('should count the number of cards in a deck', () => {

    expect(wrapper.find('.deck-counter').first().text()).toEqual('1')
  })

  it('should fire two actions on click', () => {
    const deck = wrapper.find('.deck-name').last()
    deck.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
