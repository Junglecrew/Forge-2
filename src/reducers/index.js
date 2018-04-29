import { combineReducers } from 'redux'
import session from './session/reducer'
import news from './news/reducer'

export default combineReducers({
  session,
  news
})
