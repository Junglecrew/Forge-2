//import React from 'react'
import { connect } from 'react-redux'
import { logIn, clearErrorMsg } from '../reducers/session/actions'
import Login from '../components/Login'
import { getId, getError, getIsFetching } from '../reducers/session/selectors'

const mapStateToProps = state => ({
  isAuth: getId(state),
  error: getError(state),
  isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, { logIn, clearErrorMsg })(Login)
