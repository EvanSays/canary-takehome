import React, { createContext, useReducer } from 'react'
import { ContextProviderProps } from '../types/contextTypes'
import Reducer from './reducer'

const initialState = {}

export const Context = createContext(initialState)

export const Store = (props: ContextProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
  )
}