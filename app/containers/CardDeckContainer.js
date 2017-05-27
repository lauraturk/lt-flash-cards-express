import { connect } from 'react-redux'
import { CardDeck } from '../components/CardDeck/CardDeck'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.decks
  }
}

export default connect(null, null)(CardDeck)
