import { all, fork } from 'redux-saga/effects'
import counterSaga from './features/counter/saga'

export default function * rootSaga () {
  yield all([
    fork(counterSaga)
  ])
}
