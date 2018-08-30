import getNewsWatcher from '../reducers/news/saga'
import getProfileWatcher from '../reducers/profile/saga'
import { fork, all } from 'redux-saga/effects'
import sessionSagaWatcher from '../reducers/session/saga'

const sagas = [getNewsWatcher, getProfileWatcher, sessionSagaWatcher]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}
