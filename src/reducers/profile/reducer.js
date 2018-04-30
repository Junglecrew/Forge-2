import * as types from './types'

const initialState = {
  isFetching: false,
  error: null,
  user: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case types.PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: action.payload,
      }
    case types.PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}