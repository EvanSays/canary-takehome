
import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../../screens/Landing';
import MapScreen from '../../screens/Maps'
import { NavNames } from '../../constants/navigation'
import colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import ChartsNav from '../ChartsNav'

type AppNavProps = {}

export type AppStackParamList = {
  Home: undefined,
  Maps: {type?: string},
  Charts: undefined,
}

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppNavigator = (props: AppNavProps) => {

  const navigation = useNavigation()

  useEffect(() => {
    const goBack = () => {
      if(navigation.canGoBack()){
        navigation.goBack()
      } else {
        BackHandler.exitApp()
      }
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', goBack)

    return () => BackHandler.removeEventListener('hardwareBackPress', goBack)
  }, [])



  return (
      <Stack.Navigator
        initialRouteName={NavNames.home as keyof AppStackParamList}
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.brandBlue,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name={NavNames.home as keyof AppStackParamList} 
          component={LandingScreen} 
          options={{
            headerShown: false,
            title: ''
          }}  
        />
        <Stack.Screen 
          name={NavNames.maps as keyof AppStackParamList}
          component={MapScreen}
          options={{
            animation: 'slide_from_right',
            gestureDirection: 'horizontal',
            title: 'Maps'
          }}  
        />
        <Stack.Screen 
          name={NavNames.charts as keyof AppStackParamList} 
          component={ChartsNav} 
          options={{
            animation: 'slide_from_right',
            gestureEnabled: true,
            title: 'Pollutant Charts'
          }}  
        />
      </Stack.Navigator>
  );
}

export default AppNavigator;