// import { checkCredentials } from '../../helpers/session'
// import { getUser } from './selectors'
import * as types from './types'
import { store } from '../../index.js'

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

export const clearErrorMsg = () => ({
  type: types.ERROR_MSG_CLEAR,
})

export const sessionSaga = params => ({
  type: types.SESSION_SAGA,
  params,
})

export const errorHandler = data => {
  console.log(data)
  let msg
  console.log(data.message)
  if (data.message === 'wrong_email_or_password') {
    msg = 'Неправильный логин или пароль'
  } else if (data.status === '503') {
    msg = 'Сервер не доступен'
  } else {
    msg = data.message
  }
  store.dispatch(logInError(msg))
}

// export const logIn = params => (dispatch, getState) => {
//   dispatch(logInStart(params))
//   fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ email: params.email, password: params.password }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.status === 'ok') {
//         dispatch(logInSuccess(data.data))
//       } else {
//         errorHandler(data)
//       }
//     })
// }

export function logOut() {
  return {
    type: types.LOG_OUT,
  }
}
