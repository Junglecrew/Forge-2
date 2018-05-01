import propTypes from 'prop-types'
import React, { Component } from 'react'
import FA from 'react-fontawesome'
import Preloader from '../components/Preloader'

class Profile extends Component {
  static propTypes = {
    id: propTypes.number,
    getProfile: propTypes.func.isRequired,
    isFetching: propTypes.bool.isRequired,
    user: propTypes.object,
    socials: propTypes.array,
    error: propTypes.string,
  }
  componentWillMount() {
    const { id, getProfile } = this.props
    getProfile(id)
  }

  getBody() {
    const { isFetching } = this.props
    const propfileContent =
      isFetching === true ? <Preloader /> : this.makeProfile()
    return propfileContent
  }

  makeProfile() {
    const { user, socials, error } = this.props
    if (user === null) {
      return <div>{error}</div>
    } else {
      const languages = user.languages.map((item, index) => (
        <li key={index}>{item}</li>
      ))
      const socialsList = socials.map((item, index) => (
        <li key={index} className="profile__socials">
          <FA name={item.label} style={{ width: '16px' }} />
          <a className="profile__socials-link" href={item.link} target="_blank">
            {item.link}
          </a>
        </li>
      ))
      return (
        <table className="profile">
          <tbody>
            <tr className="profile__item">
              <td className="profile__item-title">Город: </td>
              <td>{user.city}</td>
            </tr>
            <tr className="profile__item">
              <td className="profile__item-title">Знание языков: </td>
              <td>{languages}</td>
            </tr>
            <tr className="profile__item">
              <td className="profile__item-title">Cсылки:</td>
              <td>{socialsList}</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

  render() {
    return <div>{this.getBody()}</div>
  }
}

export default Profile
