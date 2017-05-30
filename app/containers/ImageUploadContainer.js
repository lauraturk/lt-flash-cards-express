import { connect } from 'react-redux'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import { findWords, clearWords } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    foundWords : state.foundWords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findImageWords: (stringImg) => {
      dispatch(findWords(stringImg))
    },

    clearWords: () => {
      dispatch(clearWords())
    },

    translateWord: () => {
      dispatch(translateWord())
    },

    defineWord: () => {
      dispatch(defineWord())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)
