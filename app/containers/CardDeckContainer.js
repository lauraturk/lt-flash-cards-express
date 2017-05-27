import { connect } from 'react-redux'
import CardDeck from '../components/CardDeck/CardDeck'
import {addCard, deleteCard} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.deck,
    currentCard : state.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard : (deckName, card) => {
      dispatch(addCard(deckName, card))
    },

    deleteCard : (card) => {
      dispatch(deleteCard(card))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck)
