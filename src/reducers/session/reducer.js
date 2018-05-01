import * as types from './types'

const initialState = {
  isFetching: false,
  error: null,
  id: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        id: action.payload.id,
      }
    case types.LOG_IN_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    case types.ERROR_MSG_CLEAR:
      return {
        ...state,
        error: null,
      }
    case types.LOG_OUT:
      return {
        ...state,
        id: null,
      }

    default:
      return state
  }
}
