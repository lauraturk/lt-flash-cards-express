import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList } from '../actions/index'

// const mapStateToProps = (state) => {
//   return {
//     languageSet : state.languageSet
//   }
// }


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(loadLanguageList())
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)
