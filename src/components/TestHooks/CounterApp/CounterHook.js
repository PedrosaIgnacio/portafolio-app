import { useState } from 'react'

export const useCounter = (initialState = 1) => {
  const [state, setState] = useState(initialState)
  const increment = (cant = 1) => {
    setState(state + cant)
  }
  const decrement = (cant = 1) => {
    setState(state - cant)
  }
  const reset = () => {
    setState(initialState)
  }
  return {
    state,
    increment,
    decrement,
    reset,
  }
}
