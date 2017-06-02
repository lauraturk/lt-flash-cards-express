import { connect } from 'react-redux';
import { signInUser, signOutUser } from '../actions/index.js';
import User from '../components/User/User';

  const mapStateToProps = (state) => {
    return { userId : state.user}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleSignIn: (userId) => {
        dispatch(signInUser(userId))
      },

      handleSignOut: () => {
        dispatch(signOutUser())
      },

    }

  }

export default connect(mapStateToProps, mapDispatchToProps)(User)
