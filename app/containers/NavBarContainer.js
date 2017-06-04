import { connect } from 'react-redux'
import NavBar from '../components/NavBar/NavBar'

const mapStateToProps = (state) => {
  return {
    deck: state.deck
  }
}

export default connect(mapStateToProps, null)(NavBar)
