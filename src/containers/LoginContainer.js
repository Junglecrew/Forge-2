//import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../reducers/session/actions'
import Login from '../components/Login'
import { getUser, getError } from '../reducers/session/selectors'

const mapStateToProps = state => ({
  isAuth: getUser(state),
  error: getError(state),
})

export default connect(mapStateToProps, { logIn })(Login)
