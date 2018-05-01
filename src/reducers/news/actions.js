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
  fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(data => dispatch(newsSuccess(data.data)))
    .catch(error => dispatch(newsError(error)))
}
