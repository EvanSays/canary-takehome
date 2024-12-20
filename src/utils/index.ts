import { SensorDataState } from "../context"

const SECONDS_BETWEEN_READINGS = 120

export const calcDelta = (value: string, state: SensorDataState) => {
    if (state.sensorData.length < SECONDS_BETWEEN_READINGS) {
        return 0
    }
    const currentValue = parseFloat(value)
    const previousValue = parseFloat(state.sensorData[state.sensorData.length - SECONDS_BETWEEN_READINGS].Ch4)
    return currentValue - previousValue
}

const normalizeDelta = (delta: number, min: number, max: number) => {
    return (delta - min) / (max - min);
};

export const getDeltaColor = (delta: number) => {
    if (delta < 0) {
        return '#0000FF'; // Blue
    } else if (delta >= 0 && delta <= 0.05) {
        return '#00FF00'; // Green
    } else if (delta > 0.05 && delta <= 1) {
        return '#FFFF00'; // Yellow
    } else if (delta > 1) {
        return '#FF4500'; // Orange
    } else if (delta > 2) {
        return '#FF0000'; // Red (extremely high values)
    }
};

export const MOCK_DATA = Array.from({ length: 31 }, (_, i) => ({
    x: i,
    y: 40 + 30 * Math.random(),
}));