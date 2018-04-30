import { checkCredentials } from '../../helpers/session'
// import { getUser } from './selectors'
import * as types from './types'

export const logInStart = () => ({
  type: types.LOG_IN_START,
})

export const logInSuccess = payload => ({
  type: types.LOG_IN_SUCCESS,
  payload,
})

export const logInError = payload => ({
  type: types.LOG_IN_ERROR,
  payload,
})

export const server404 = payload => ({
  type: types.SERVER_404,
  payload,
})

export const logIn = params => (dispatch, getState) => {
  dispatch(logInStart(params))
  if (!checkCredentials(params)) {
    fetch('http://5ae32aeb34b5970014d2edd6.mockapi.io/validate-err', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => dispatch(logInError(data)))
  } else {
    fetch('http://5ae32aeb34b5970014d2edd6.mockapi.io/validate-ok', {
      method: 'POST',
      body: {
        email: `${params.email}`,
        password: `${params.password}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        data.status === 'ok'
          ? dispatch(logInSuccess(data))
          : dispatch(logInError(data))
        // .catch(error => dispatch(logInError(error)))
      })
  }
}

export const serverError = () => (dispatch, getState) => {
  fetch('http://5ae32aeb34b5970014d2edd6.mockapi.io/wrongURL', {
    method: 'POST',
  }).then(response => response.json().then(data => dispatch(server404(data))))
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  }
}
