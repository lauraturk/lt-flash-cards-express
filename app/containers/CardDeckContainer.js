import { connect } from 'react-redux'
import { CardDeck } from '../components/CardDeck/CardDeck'
import {cancelCard, showAnswer, showDeck} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.deck,
    currentCard : state.currentCard,
    controlState : state.controlState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard : (deckName, cardId) => {
      dispatch(deleteCard(deckName, cardId))
    },

    showDeck: (deckName) => {
      dispatch(showDeck(deckName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck)
