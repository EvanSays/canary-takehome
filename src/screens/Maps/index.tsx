import React, {useContext, useMemo} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { AppStackParamList } from '../../navigation/AppNav'
import MapView, { Marker } from 'react-native-maps';
import { Context, SensorData } from '../../context';

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
        {/* <Marker key={index} coordinate={{ latitude: parseFloat(state.currentReading.Latitude), longitude: parseFloat(state.currentReading.Longitude) }} /> */}
        {state.pinHistory.map((item: any) => {
          const latitude = parseFloat(item.latitude);
          const longitude = parseFloat(item.longitude);

          return (
            <Marker key={item.index} coordinate={{ latitude: latitude, longitude: longitude }} pinColor="#474744"/>
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
});

export default MapScreen