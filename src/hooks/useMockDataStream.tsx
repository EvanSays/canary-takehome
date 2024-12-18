import { useContext, useEffect, useState } from "react";
import { Context } from "../context";

export const useMockDataStream = () => {
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        if (state.isDataReady) {
            let index = 0
            const interval = setInterval(() => {
                dispatch({type: 'SET_CURRENT_READING', payload: {...state.sensorData[index], index: index}})
                index++
            }, 50);
            return () => clearInterval(interval);
        }   
    }, [state.isDataReady]);
}