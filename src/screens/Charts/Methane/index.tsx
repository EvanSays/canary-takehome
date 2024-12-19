import React, {useCallback, useContext, useMemo } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { CartesianChart, Line, useChartTransformState } from "victory-native";
import { Context } from '../../../context';
import { matchFont} from "@shopify/react-native-skia";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  x: i,
  y: 40 + 30 * Math.random(),
}));

const MethaneScreen = () => { 
  const [state, dispatch] = useContext(Context)
  
  const chartData = useMemo(() => {
    return state.sensorData.map((reading) => ({
      x: reading.TimeStamp,
      y: parseFloat(reading.Ch4)
    }))
  }, [state.sensorData])

  
  if (!state.sensorData) return null

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <CartesianChart 
          data={chartData} 
          xKey="x" 
          yKeys={["y"]}
          domainPadding={{ left: 20, right: 20, top: 20, bottom: 20 }}
        >
          {({ points }) => (
            <Line points={points.y} color="red" strokeWidth={3} animate={{ type: "timing", duration: 1000 }}/>
          )}
        </CartesianChart>
      </View>
      <Text style={styles.xAxisLabel}>Time</Text>
      <Text style={styles.yAxisLabel}>CH₄ (ppm)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    padding: 20,
    position: 'relative',
  },
  chartContainer: {
    height: 300,
  },
  xAxisLabel: {
    textAlign: 'center',
    marginTop: 10,
  },
  yAxisLabel: {
    position: 'absolute',
    left: -20,
    top: '50%',
    transform: [{ rotate: '-90deg' }],
  },
});

export default MethaneScreen