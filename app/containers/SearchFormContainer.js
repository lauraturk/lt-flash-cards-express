import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList, translateWord, defineWord, addCard, cancelCard, clearWords } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    targetLanguage : state.targetLanguage,
    currentDeck : state.deck,
    currentCard : state.currentCard,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(loadLanguageList())
    },
    createTranslationCard: (inputWord, targetLanguage) => {
      dispatch(translateWord(inputWord, targetLanguage))
    },
    createDefinitionCard: (inputWord, targetLanguage) => {
      dispatch(defineWord(inputWord, targetLanguage))
    },
    addCard : (deckName, currentDeck, currentCard) => {
      dispatch(addCard(deckName, currentDeck, currentCard))
    },
    cancelCard : () => {
      dispatch(cancelCard())
    },
    clearWords: () => {
      dispatch(clearWords())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
