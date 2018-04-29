//import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../reducers/session/actions'
import Login from '../components/Login'
import { error, getUser, getError } from '../reducers/session/selectors'

const mapStateToProps = state => ({
  isAuth: getUser(state),
  error: getError(state),
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
