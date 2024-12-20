import React, {useContext, useMemo} from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { AppStackParamList } from '../../navigation/AppNav'
import MapView, { Marker } from 'react-native-maps';
import { Context, SensorData } from '../../context';
import { getDeltaColor } from '../../utils';

export type MapProps = {
  navigation: NavigationProp<ParamListBase>,
  route: RouteProp<AppStackParamList>
}

const MapScreen = ({navigation, route}: MapProps) => {
  const [state, dispatch] = useContext(Context)

  if (!state.currentReading) {
    return null
  }

  return (
    <View style={styles.screen}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.0058631897,
          longitude: -84.2338256836,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {state.pinHistory.map((item: any) => {
          const {latitude, longitude, delta, methane, ethane} = item
          return (
            <Marker key={item.index} coordinate={{ latitude, longitude }} pinColor={getDeltaColor(delta)} title={`Ch4 & C2H6 Levels:`} description={`Ch4: ${methane.toFixed(4)} ppm, C2H6: ${ethane.toFixed(4)} ppm, Delta: ${delta.toFixed(4)}`}/>
          )
        })}
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 50,
    height: 50,
    padding: 5,
    resizeMode: 'contain',
  },
});

export default MapScreen