import { connect } from 'react-redux'
import { SettingsForm } from '../components/SettingsForm/SettingsForm'
import { selectLanguage } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    languages : state.languages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    selectTargetLanguage: (language) => {
      dispatch(selectLanguage(language))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm)
