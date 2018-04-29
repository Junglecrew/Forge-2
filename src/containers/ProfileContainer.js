import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { getUser } from '../reducers/session/selectors'

class ProfileContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
