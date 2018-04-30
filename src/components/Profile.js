import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Preloader from '../components/Preloader'

class Profile extends Component {
  static PropTypes = {
    id: PropTypes.string,
    getProfile: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }
  componentWillMount() {
    const { id, getProfile } = this.props
    getProfile(id)
    console.log('will mount')
  }

  getBody() {
    const { user } = this.props
    const propfileContent = user === null ? <Preloader /> : this.makeProfile()
    return propfileContent
  }

  makeProfile() {
    const { user } = this.props
    const languages = user.languages.map(item => <p>{item}</p>)
    const socials = user.social.map(item => (
      <div>
        {item.label} {item.link}
      </div>
    ))
    return (
      <div>
        <div>Город: {user.city}</div>
        <div>Знание языков: {languages}</div>
        <div>Cсылки: {socials}</div>
      </div>
    )
  }

  render() {
    return <div>{this.getBody()}</div>
  }
}

export default Profile

// const Profile = ({ id }) => {
//   return (
//     <React.Fragment>
//       <h2>Профиль</h2>
//       <p>Вас зовут: {id.name}</p>
//     </React.Fragment>
//   )
// }

// Profile.proptypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// }

// export default Profile
