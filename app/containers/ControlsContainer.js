import { connect } from 'react-redux'
import { Controls } from '../components/Controls/Controls'
import { showAnswer, nextCard, prevCard } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
  return {

  nextCard : () => {
    dispatch(nextCard())
  },
  showAnswer : () => {
    dispatch(showAnswer())
    }
  }
}

export default connect(null, mapDispatchToProps)(Controls)
