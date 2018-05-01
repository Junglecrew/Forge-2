import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Preloader from './Preloader'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '400px',
    marginBottom: '40px',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
})

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
    disabled: true,
    inputStyleError: true,
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.error === prevProps.error) {
      return null
    }
    return {
      password: '',
    }
  }

  componentDidMount() {
    const { history, clearErrorMsg } = this.props
    console.log(history.location.pathname)
    if (history.location.pathname === '/login') return clearErrorMsg()
  }

  handleChange = e => {
    const { isFetching } = this.props
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.id
    if ((isFetching === true) & (e.key === 'Enter')) {
      e.preventDefault()
    }
    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.logIn({ email, password })
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const { classes, isAuth, error, isFetching } = this.props
    const {
      email,
      password,
      disabled,
      inputStyleError,
      showPassword,
    } = this.state

    if (isAuth) {
      return <Redirect to={'/profile'} />
    }

    return (
      <div>
        {error && <p className="errormsg">{error}</p>}
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              onKeyPress={this.handleChange}
              error={
                error === 'wrong_email_or_password' ? inputStyleError : false
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleChange}
              onKeyPress={this.handleChange}
              error={
                error === 'wrong_email_or_password' ? inputStyleError : false
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="raised"
            color="primary"
            disabled={isFetching === true ? disabled : false}
          >
            Войти
          </Button>
          <div>{isFetching && <Preloader />}</div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  clearErrorMsg: PropTypes.func.isRequired,
  isAuth: PropTypes.number,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Login)

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Redirect } from 'react-router-dom'
// import Button from 'material-ui/Button'

// class Login extends React.Component {
//   state = {
//     email: '',
//     password: '',
//   }

//   static propTypes = {
//     logIn: PropTypes.func.isRequired,
//     isAuth: PropTypes.string,
//     error: PropTypes.string,
//   }

// handleSubmit = e => {
//   e.preventDefault()
//   const { email, password } = this.state

//   this.props.logIn({ email, password })
// }

//   handleChange = e => {
//     const value = e.currentTarget.value
//     const fieldName = e.currentTarget.dataset.fieldName

//     this.setState(prev => ({
//       ...prev,
//       [fieldName]: value,
//     }))
//   }

//   render() {
//     const { isAuth, error } = this.props
//     const { email, password } = this.state

//     if (isAuth) {
//       return <Redirect to={'/profile'} />
//     }

//     return (
//       <div>
//         {error && <p className="errormsg">{error}</p>}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             data-field-name={'email'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Имя'}
//             value={email}
//           />
//           <input
//             data-field-name={'password'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Пароль'}
//             value={password}
//           />
//           <Button
//             type="submit"
//             variant="raised"
//             color="primary"
//             // disabled="false"
//           >
//             Log in
//           </Button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Login
