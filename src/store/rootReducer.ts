'use client'

import counterReducer from './features/counter/slice'
import { combineReducers } from 'redux'

export default combineReducers({
  counter: counterReducer
})
