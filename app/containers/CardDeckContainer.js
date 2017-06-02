import { connect } from 'react-redux'
import { CardDeck } from '../components/CardDeck/CardDeck'
import {cancelCard, showAnswer, showDeck, nextCard } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.deck,
    currentCard : state.currentCard,
    controlState : state.controlState,
    deckControl : state.deckControl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard : (deckName, cardId) => {
      dispatch(deleteCard(deckName, cardId))
    },

    showDeck: (deckName) => {
      dispatch(showDeck(deckName))
    },

    nextCard: (deckControl, deck) => {
      dispatch(nextCard(deckControl, deck))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck)
