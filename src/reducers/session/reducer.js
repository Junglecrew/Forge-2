import * as types from './types'

const initialState = {
  user: null,
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
        // user: action.payload,
        user: '1',
      }
    // case types.LOG_OUT:
    //   return {
    //     ...state,
    //     user: null,
    //     errorMsg: '',
    //   }
    case types.LOG_IN_ERROR:
      return {
        ...state,
        error: action.payload.message,
      }
    default:
      return state
  }
}
