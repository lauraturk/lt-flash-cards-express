import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    targetLanguage : state.targetLanguage
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(loadLanguageList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
