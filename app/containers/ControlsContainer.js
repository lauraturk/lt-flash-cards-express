import { connect } from 'react-redux'
import { Controls } from '../components/Controls/Controls'
import { showAnswer, nextCard, prevCard } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    deckControl: state.deckControl,
    cardControl: state.cardControl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  nextCard : (deckControl, deck) => {
    dispatch(nextCard(deckControl, deck))
  },
  showAnswer : () => {
    dispatch(showAnswer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
