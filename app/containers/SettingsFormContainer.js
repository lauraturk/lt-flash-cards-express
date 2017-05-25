import { connect } from 'react-redux'
import { SettingsForm } from '../components/SettingsForm/SettingsForm'
// import { loadLanguageList, addLanguages } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    languageSet : state.languageSet
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(addLanguages(languageSet))
    }
  }
}

export default connect(mapStateToProps, null)(SettingsForm)
