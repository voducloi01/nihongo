import { createSlice } from '@reduxjs/toolkit'
import reducers from '@/stores/slices/counter/reducer'

export interface CounterType {
  value: number
}

const initState: CounterType = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: reducers,
})

// Action creators are generated for each case reducer function
export const { increment, decrement, resetCount } = counterSlice.actions

export default counterSlice.reducer
