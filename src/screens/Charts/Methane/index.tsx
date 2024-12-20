import React, { useContext, useMemo } from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { CartesianChart, Line } from "victory-native";
import { Context } from '../../../context';
import { useFont } from "@shopify/react-native-skia";
import inter from "../../../../assets/fonts/inter-medium.ttf";
import { ToolTip } from '../../../components/ToolTip';
import { useChartInteraction } from '../../../hooks/useChartInteraction';
import { styles } from '../../../styles/ChartStyles';

const Y_AXIS_LABEL = "CH4"

const MethaneScreen = () => { 
    const [state] = useContext(Context)
    if (!state.sensorData) return null

    const {
        transformState,
        pressState,
        isActive,
        zoomIn,
        zoomOut,
        enableChartPress,
        setEnableChartPress,
        domain
    } = useChartInteraction();

    const chartData = useMemo(() => {
        return state.sensorData.map((reading) => ({
            x: reading.TimeStamp,
            y: parseFloat(reading.Ch4)
        }))
    }, [state.sensorData])

    const font = useFont(inter, 16);  

    return (
        <View style={{height: '100%', borderWidth: 1}}>
            <View style={styles.chartContainer}>
                <CartesianChart 
                    transformState={transformState}
                    data={chartData.filter((_, index) => index % 4 === 0)} 
                    transformConfig={{
                        pan: { enabled: !enableChartPress, dimensions: ["x", "y"] },
                        pinch: { enabled: true },
                    }}
                    xKey="x" 
                    yKeys={["y"]}
                    domainPadding={{ left: 20, right: 20, top: 20, bottom: 20 }}
                    axisOptions={{
                        font, 
                        tickCount: {x: 3, y: 6}, 
                        formatXLabel: (label) => {
                            if (!label) return ''
                            return label.split(' ')[1];
                        }
                    }}
                    chartPressState={enableChartPress ? pressState : undefined}
                    domain={enableChartPress ? domain : undefined}
                >
                    {({ points }) => (
                        <>
                            <Line 
                                points={points.y} 
                                color="red" 
                                strokeWidth={3} 
                                animate={{ type: "timing", duration: 1000 }}
                            />
                            {isActive && (
                                <ToolTip 
                                    x={pressState.x.position} 
                                    y={pressState.y.y.position} 
                                />
                            )}
                        </>
                    )}
                </CartesianChart>
            </View>
            <Text style={styles.xAxisLabel}>Time</Text>
            <Text style={styles.yAxisLabel}>{Y_AXIS_LABEL} ppm</Text>
            {enableChartPress && (
                <>
                    <View style={styles.dataViewContainer}>
                        <Text style={styles.xValue}>{pressState.x.value.value || 'Press a point'}</Text>
                        <Text style={styles.yValue}>{pressState.y.y.value.value}</Text>
                    </View>
                    <View style={styles.buttonContainer}> 
                        <Button title="Zoom In" onPress={zoomIn} />
                        <Button title="Zoom Out" onPress={zoomOut} />
                    </View>
                </>
            )}
            <Button 
                title={enableChartPress ? "Disable Chart Press" : "Enable Chart Press"} 
                onPress={() => setEnableChartPress(!enableChartPress)} 
            />
        </View>
    )
}

export default MethaneScreen