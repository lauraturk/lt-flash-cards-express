import { connect } from 'react-redux'
import { Card } from '../components/Card/Card'
import { cancelCard } from '../actions/index'


const mapStateToProps = (state) => {
  return {
    currentCard : state.currentCard,
    controlState : state.controlState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelCard : () => {
      dispatch(cancelCard())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
