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
    case types.SERVER_404:
      return {
        ...state,
        error: 'К сожалению, сервер не доступен',
      }
    // case types.LOG_OUT:
    //   return {
    //     ...state,
    //     user: null,
    //     errorMsg: '',
    //   }

    default:
      return state
  }
}
