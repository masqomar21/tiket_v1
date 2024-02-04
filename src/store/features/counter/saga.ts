/* eslint-disable @typescript-eslint/no-unused-vars */
import { takeEvery, select, call, put } from 'redux-saga/effects'
import { increment } from './slice'
import { type RootState } from '@/store/strore'

function * incrementSaga () {
  const counter: number = yield select((state: RootState) => state.counter.value)
  console.log(`counter  ${counter}`)
}

function * counterSaga () {
  yield takeEvery(increment.type, incrementSaga)
}

export default counterSaga
