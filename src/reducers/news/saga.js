import { takeLatest, call, put } from 'redux-saga/effects'
import { newsStart, newsSuccess, newsError } from './actions'
import * as types from './types'

function* getNewsWorker() {
  yield put(newsStart())

  try {
    const news = yield call(() => {
      return fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news').then(response => response.json())
    })

    yield put(newsSuccess(news.data))
  } catch (error) {
    yield put(newsError(error))
  }
}

function* getNewsWatcher() {
  yield takeLatest(types.NEWS_SAGA, getNewsWorker)
}

export default getNewsWatcher
