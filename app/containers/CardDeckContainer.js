import { connect } from 'react-redux'
import CardDeck from '../components/CardDeck/CardDeck'
import {cancelCard} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.deck,
    currentCard : state.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard : (deckName, cardId) => {
      dispatch(deleteCard(deckName, cardId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck)
