import propTypes from 'prop-types'
import React, { Component } from 'react'
import FA from 'react-fontawesome'
import Preloader from '../components/Preloader'

class Profile extends Component {
  static propTypes = {
    id: propTypes.number,
    profileSaga: propTypes.func.isRequired,
    isFetching: propTypes.bool.isRequired,
    user: propTypes.object,
    socials: propTypes.array,
    error: propTypes.string,
  }
  componentWillMount() {
    const { id, profileSaga } = this.props
    profileSaga(id)
  }

  getBody() {
    const { isFetching } = this.props
    const propfileContent = isFetching === true ? <Preloader /> : this.makeProfile()
    return propfileContent
  }

  getUrl = item => {
    item.link.indexOf('htt') !== -1 ? window.open(item.link) : window.open(`https://${item.link}`)
  }

  makeProfile() {
    const { user, socials, error } = this.props
    if (user === null) {
      return <div>{error}</div>
    } else {
      const languages = user.languages.map((item, index) => <li key={index}>{item}</li>)
      const socialsList = socials.map((item, index) => (
        <li key={index} className="profile__socials-item">
          <a className="profile__socials-link" onClick={() => this.getUrl(item)} target="_blank">
            {item.label === 'web' ? <FA name="globe" size="2x" /> : <FA name={item.label} size="2x" />}
          </a>
        </li>
      ))
      return (
        <table className="profile">
          <tbody>
            <tr className="profile__item">
              <td className="profile__item-title">Город: </td>
              <td>
                <div className="profile__city">{user.city}</div>
              </td>
            </tr>
            <tr className="profile__item">
              <td className="profile__item-title">Знание языков: </td>
              <td>
                <ul className="profile__languages-list">{languages}</ul>
              </td>
            </tr>
            <tr className="profile__item">
              <td className="profile__item-title">Cсылки:</td>
              <td>
                <ul className="profile__socials-list">{socialsList}</ul>
              </td>
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
