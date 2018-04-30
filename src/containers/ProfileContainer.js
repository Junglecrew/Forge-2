import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { getUser, getIsFetching } from '../reducers/profile/selectors'
import { getId } from '../reducers/session/selectors'
import { getProfile } from '../reducers/profile/actions'

class ProfileContainer extends React.Component {
  render() {
    const { user, id, isFetching, getProfile } = this.props
    return (
      <Profile
        user={user}
        id={id}
        isFetching={isFetching}
        getProfile={getProfile}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  isFetching: getIsFetching(state),
  id: getId(state),
})

export default connect(mapStateToProps, { getProfile })(ProfileContainer)
