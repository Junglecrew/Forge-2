import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import sagas from './sagas/sagas'

import './index.css'

const saga = createSagaMiddleWare()

const middleware = [thunk, saga]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

saga.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
