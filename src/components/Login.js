import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    isAuth: PropTypes.string,
    error: PropTypes.string,
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn({ username, password })
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  render() {
    const { isAuth, error } = this.props
    // const { from } = location.state || { from: { pathname: '/' } }
    const { username, password } = this.state

    if (isAuth) {
      return <Redirect to={'/profile'} />
    }

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={username}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}



export default Login
