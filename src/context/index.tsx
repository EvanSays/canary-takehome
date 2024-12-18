import React, { createContext, useReducer, Dispatch } from 'react'
import { ContextProviderProps } from '../types/contextTypes'
import Reducer from './reducer'

export interface SensorData {
  timestamp: string
  latitude: number
  longitude: number
  methane: number
  ethane: number
}

export interface SensorDataState {
  sensorData: SensorData[];
  isStreaming: boolean;
  currentReading?: SensorData;
}

const initialState = {
  sensorData: [],
  isStreaming: false,
}

export const Context = createContext<[SensorDataState, Dispatch<any>]>([initialState, () => {}])

export const Store = (props: ContextProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
  )
}