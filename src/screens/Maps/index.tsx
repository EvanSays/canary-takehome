import React, {useContext, useMemo} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { AppStackParamList } from '../../navigation/AppNav'
import MapView, { Marker } from 'react-native-maps';
import { Context } from '../../context';

export type MapProps = {
  navigation: NavigationProp<ParamListBase>,
  route: RouteProp<AppStackParamList>
}

const MapScreen = ({navigation, route}: MapProps) => {
  const [state, dispatch] = useContext(Context)
  // console.log({state})
  console.log(state.sensorData[0])
  return (
    <View style={styles.screen}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.0058631897,
          longitude: -84.2338256836,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}
      >
        {state.sensorData.map((item: any) => {
          const latitude = parseFloat(item.Latitude);
          const longitude = parseFloat(item.Longitude);
          // console.log(latitude, longitude)
          // console.log(item)
          return (
            <Marker key={item.TimeStamp} coordinate={{ latitude: latitude, longitude: longitude }} />
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