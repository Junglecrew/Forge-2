import * as types from './types'

export const profileStart = () => ({
  type: types.PROFILE_START,
})

export const profileSuccess = payload => ({
  type: types.PROFILE_SUCCESS,
  payload,
})

export const profileError = payload => ({
  type: types.PROFILE_ERROR,
  payload,
})

export const getProfile = id => (dispatch, getState) => {
  dispatch(profileStart())
  fetch(`http://5ae32aeb34b5970014d2edd6.mockapi.io/user-info/${id}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === '404') {
        dispatch(profileSuccess(data))
      } else {
        dispatch(profileError('пользователь не найден'))
      }
    })
}
