import type { SensorDataState, SensorData } from './index'

type Action = {
  type: 'SET_SENSOR_DATA';
  payload: SensorData[];
}

const Reducer = (state: SensorDataState, action: any) => {
  switch (action.type) {
    case 'SET_SENSOR_DATA':
      return {
        ...state,
        sensorData: action.payload,
      }
    default:
      return state
  }
}

export default Reducer