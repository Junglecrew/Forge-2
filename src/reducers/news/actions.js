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

export const getNewsFromServer = () => (dispatch, getState) => {
  dispatch(newsStart())
  fetch('http://5ae32aeb34b5970014d2edd6.mockapi.io/news')
    .then(response => response.json())
    .then(data => dispatch(newsSuccess(data)))
    .catch(error => dispatch(newsError(error)))
}
