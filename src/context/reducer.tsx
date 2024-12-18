import type { SensorDataState, SensorData } from './index'

type Action = {
  type: 'SET_SENSOR_DATA';
  payload: SensorData[];
} | {
  type: 'SET_CURRENT_READING';
  payload: SensorData;
} | {
  type: 'SET_DATA_READY';
  payload: boolean;
}

const Reducer = (state: SensorDataState, action: any) => {
  switch (action.type) {
    case 'SET_SENSOR_DATA':
      return {
        ...state,
        sensorData: action.payload,
      }
    case 'SET_CURRENT_READING':
      const pinHistory = [...state.pinHistory, {
        index: action.payload.index,
        latitude: action.payload.Latitude,
        longitude: action.payload.Longitude,
      }]
      return {
        ...state,
        currentReading: action.payload,
        pinHistory: pinHistory,
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