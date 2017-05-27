import { connect } from 'react-redux'
import { Card } from '../components/Card/Card'
import { deleteCard } from '../actions/index'


const mapStateToProps = (state) => {
  return {
    currentCard : state.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard : () => {
      dispatch(deleteCard())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
