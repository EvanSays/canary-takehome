import React, { createContext, useReducer, Dispatch } from 'react'
import { ContextProviderProps } from '../types/contextTypes'
import { Action } from './reducer'
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
  isStreamingReady: boolean;
  currentReading?: SensorData | null;
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
  isStreamingReady: false,
  isDataReady: false,
  pinHistory: [],
}

export const Context = createContext<[SensorDataState, Dispatch<Action>]>([initialState, () => {}])

export const Store = (props: ContextProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<SensorDataState, Action>>(
    Reducer, 
    initialState
  )

  return (
    <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
  )
}