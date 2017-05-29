import { connect } from 'react-redux'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import { findWords } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    foundWords : state.foundWords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findImageWords: (stringImg) => {
      dispatch(findWords(stringImg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)
