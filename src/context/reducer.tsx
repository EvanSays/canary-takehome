import type { SensorDataState, SensorData } from './index'
import { calcDelta } from '../utils'
type Action = {
  type: 'SET_SENSOR_DATA';
  payload: SensorData[];
} | {
  type: 'SET_CURRENT_READING';
  payload: SensorData;
} | {
  type: 'SET_DATA_READY';
  payload: boolean;
} | {
  type: 'RESET_CURRENT_READING';
}

const Reducer = (state: SensorDataState, action: Action) => {
  switch (action.type) {
    case 'SET_SENSOR_DATA':
      return {
        ...state,
        sensorData: action.payload,
      }
    case 'SET_CURRENT_READING':
      const pinHistory = [...state.pinHistory, {
        index: action.payload.index,
        latitude: parseFloat(action.payload.Latitude),
        longitude: parseFloat(action.payload.Longitude),
        delta: calcDelta(action.payload.Ch4, state),
        methane: Number(action.payload.Ch4),
        ethane: Number(action.payload.C2H6),
      }]
      // console.log(pinHistory[pinHistory.length - 1].delta)
      return {
        ...state,
        currentReading: action.payload,
        pinHistory: pinHistory,
      }
    case 'RESET_CURRENT_READING':
      return {
        ...state,
        currentReading: null,
      }

    case 'SET_DATA_READY':
      return {
        ...state,
        isDataReady: action.payload,
      }
    default:
      return state
  }
}

export default Reducer