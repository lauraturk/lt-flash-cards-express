import { connect } from 'react-redux'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import { findWords, clearWords, translateWord, defineWord } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    foundWords : state.foundWords,
    targetLanguage : state.targetLanguage
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

    createTranslationCard: (inputWord, targetLanguage) => {
      dispatch(translateWord(inputWord, targetLanguage))
    },

    createDefinitionCard: (inputWord) => {
      dispatch(defineWord(inputWord))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)
