'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface counterSlice {
  value: number
}
const initialState: counterSlice = {
  value: 0
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrimentByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrimentByAmount } = counterReducer.actions
export default counterReducer.reducer
