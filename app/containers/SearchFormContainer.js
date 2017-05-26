import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList, translateWord } from '../actions/index'
// import { translateWord } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    targetLanguage : state.targetLanguage
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(loadLanguageList())
    },
    createTranslationCard: (inputWord, targetLanguage) => {
      dispatch(translateWord(inputWord, targetLanguage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
