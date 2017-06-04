import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList, translateWord, defineWord, addCard, cancelCard } from '../actions/index'

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
    addCard : (deckName, card) => {
      dispatch(addCard(deckName, card))
    },

    cancelCard : (card) => {
      dispatch(cancelCard(card))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
