import { connect } from 'react-redux'
import { Card } from '../components/Card/Card'
import { cancelCard } from '../actions/index'


const mapStateToProps = (state) => {
  return {
    currentCard : state.card
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
