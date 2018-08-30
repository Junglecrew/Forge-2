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

export const profileSaga = id => ({
  type: types.PROFILE_SAGA,
  id,
})
