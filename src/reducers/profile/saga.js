import { takeLatest, call, put } from 'redux-saga/effects'
import { profileStart, profileSuccess, profileError } from './actions'
import * as types from './types'
import ActionAccountBalanceWallet from 'material-ui/SvgIcon'

function* getProfileWorker(action) {
  const { id } = action

  yield put(profileStart())
  try {
    const profile = yield call(() => {
      return fetch(`http://5ae32aeb34b5970014d2edd6.mockapi.io/user-info/${id}`).then(response => response.json())
    }, id)

    if (profile.status !== '404') {
      yield put(profileSuccess(profile))
    } else {
      yield put(profileError('Пользователь не найден'))
    }
  } catch (error) {
    yield put(profileError(error))
  }
  ActionAccountBalanceWallet
}

function* getProfileWatcher() {
  yield takeLatest(types.PROFILE_SAGA, getProfileWorker)
}

export default getProfileWatcher
