import { connect } from 'react-redux'
import { Card } from '../components/Card/Card'
import { deleteCard } from '../actions/index'


const mapStateToProps = (state) => {
  return {
    currentCard : state.card
  }
}

const mapDispatchToProps = (dispatch) => {
  /// a button to choose and add card to deck
  return {
    deleteCard : () => {
      dispatch(deleteCard())
    }
  }

  /// a button to delete card if not wanted
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
