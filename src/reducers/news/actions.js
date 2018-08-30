import * as types from './types'

export const newsStart = () => ({
  type: types.NEWS_START,
})

export const newsSuccess = payload => ({
  type: types.NEWS_SUCCESS,
  payload,
})

export const newsError = payload => ({
  type: types.NEWS_ERROR,
  payload,
})

export const newsSaga = () => ({
  type: types.NEWS_SAGA,
})
