import { connect } from 'react-redux'
import { CardDeck } from '../components/CardDeck/CardDeck'

const mapStateToProps = (state) => {
  return {
    cardSet : state.card
  }
}

export default connect(mapStateToProps, null)(CardDeck)
