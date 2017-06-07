import { connect } from 'react-redux'
import { Card } from '../components/Card/Card'
import { cancelCard, showMore } from '../actions/index'


const mapStateToProps = (state) => {
  return {
    currentCard : state.currentCard,
    cardControl : state.cardControl,
    deckControl : state.deckControl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelCard: () => {
      dispatch(cancelCard())
    },

    showMore: () => {
      dispatch(showMore())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
