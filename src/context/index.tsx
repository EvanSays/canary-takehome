import React, { createContext, useReducer, Dispatch } from 'react'
import { ContextProviderProps } from '../types/contextTypes'
import Reducer from './reducer'

export interface SensorData {
  index: number
  TimeStamp: string
  Latitude: string
  Longitude: string
  Ch4: string //methane
  C2H6: string //ethane
}

export interface SensorDataState {
  sensorData: SensorData[];
  isStreaming: boolean;
  currentReading?: SensorData;
  isDataReady: boolean;
  pinHistory: {
    index: number;
    latitude: number;
    longitude: number;
    delta: number;
    methane: number;
    ethane: number;
  }[];
}

const initialState = {
  sensorData: [],
  isStreaming: false,
  isDataReady: false,
  pinHistory: [],
}

export const Context = createContext<[SensorDataState, Dispatch<any>]>([initialState, () => {}])

export const Store = (props: ContextProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
  )
}