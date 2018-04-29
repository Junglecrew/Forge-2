import * as types from './types'

const initialState = {
  isFetching: false,
  error: null,
  news: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEWS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case types.NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        news: action.payload,
      }
    case types.NEWS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        news: [],
      }
    default:
      return state
  }
}
