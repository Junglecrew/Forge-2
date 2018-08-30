import getNewsWatcher from '../reducers/news/saga'
import getProfileWatcher from '../reducers/profile/saga'
import { fork } from 'redux-saga/effects'
import sessionSagaWatcher from '../reducers/session/saga'

sessionSagaWatcher

const sagas = [getNewsWatcher, getProfileWatcher, sessionSagaWatcher]

export default function* root() {
  yield sagas.map(saga => fork(saga))
}
