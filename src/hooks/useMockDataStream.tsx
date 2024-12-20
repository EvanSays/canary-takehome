import { useContext, useState } from "react";
import { Context } from "../context";
import { Alert } from "react-native";
export const useMockDataStream = () => {
    const [state, dispatch] = useContext(Context)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

    const startReading = () => {
        if (state.isDataReady) {
            dispatch({type: 'SET_STREAMING_READY', payload: true})
            let index = 0
            const interval = setInterval(() => {
                if (index >= state.sensorData.length) {
                    index = 0
                    clearInterval(interval)
                    return
                }
                dispatch({type: 'SET_CURRENT_READING', payload: {...state.sensorData[index], index: index}})
                index++
            }, 50);
            setIntervalId(interval)
        } else {
            Alert.alert('Data is loading...')
        }
    }

    const reset = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        dispatch({type: 'RESET_CURRENT_READING'})
    }

    return {startReading, reset}
}