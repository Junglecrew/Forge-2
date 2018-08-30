import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from './types'
import { logInStart, logInSuccess, logInError, errorHandler } from './actions'

function* sessionSagaWorker(action) {
  const { params } = action
  yield put(logInStart())

  try {
    const sessionData = yield call(() => {
      return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: params.email, password: params.password }),
      }).then(response => response.json())
    }, params)

    if (sessionData.status === 'ok') {
      yield put(logInSuccess(sessionData.data))
    } else {
      errorHandler(sessionData)
    }
  } catch (error) {
    yield put(logInError(error))
  }
}

function* sessionSagaWatcher() {
  yield takeLatest(types.SESSION_SAGA, sessionSagaWorker)
}

export default sessionSagaWatcher
