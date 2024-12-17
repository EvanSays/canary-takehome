import React, {useMemo} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { AppStackParamList } from '../../navigation/AppNav'
import MapView, { Marker } from 'react-native-maps';

export type MapProps = {
  navigation: NavigationProp<ParamListBase>,
  route: RouteProp<AppStackParamList>
}

const MapScreen = ({navigation, route}: MapProps) => {
  return (
    <View style={styles.screen}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
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