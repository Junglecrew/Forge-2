import { checkCredentials } from '../../helpers/session'
import { getUser } from './selectors'
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

export const logIn = params => (dispatch, getState) => {
  const state = getState()
  dispatch(logInStart(params))
  fetch('http://5ae32aeb34b5970014d2edd6.mockapi.io/validate-ok', {
    method: 'POST',
    body: {
      username: `${params.username}`,
      password: `${params.password}`,
    },
  })
    .then(response => {
      if (response.status !== '200') {
        throw new Error(response.statusText)
      }
      response.json()
    })
    .then(data => dispatch(logInSuccess(data)))
    .catch(error => dispatch(logInError(error)))
}

// export function logIn(params, cb) {
//   return dispatch => {
//     if (checkCredentials(params)) {
//       dispatch({
//         type: types.LOG_IN,
//         payload: {
//           name: params.username,
//         },
//       })
//       cb()
//     } else {
//       dispatch({
//         type: types.LOG_IN_FAILURE,
//         payload: {
//           errorMsg: 'Имя пользователя или пароль введены не верно',
//         },
//         error: true, // https://github.com/redux-utilities/flux-standard-action
//       })
//     }
//   }
// }

export function logOut() {
  return {
    type: types.LOG_OUT,
  }
}
