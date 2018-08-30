import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { getUser, getIsFetching, getSortedSocials, getError } from '../reducers/profile/selectors'
import { getId } from '../reducers/session/selectors'
import { profileSaga } from '../reducers/profile/actions'

class ProfileContainer extends React.Component {
  render() {
    const { user, socials, id, isFetching, profileSaga, error } = this.props
    return (
      <Profile user={user} socials={socials} id={id} error={error} isFetching={isFetching} profileSaga={profileSaga} />
    )
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  socials: getSortedSocials(state),
  isFetching: getIsFetching(state),
  id: getId(state),
  error: getError(state),
})

export default connect(mapStateToProps, { profileSaga })(ProfileContainer)
