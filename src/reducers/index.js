import { combineReducers } from 'redux'
import session from './session/reducer'
import news from './news/reducer'
import profile from './profile/reducer'

export default combineReducers({
  session,
  news,
  profile,
})
