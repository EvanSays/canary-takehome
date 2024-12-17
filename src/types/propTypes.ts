import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { ReactNode } from 'react'
import { AppStackParamList } from '../navigation/AppNav'
// import { sensorDataType } from './dataTypes'

export type ChartsProps = {
  navigation: NavigationProp<ParamListBase>,
  route: RouteProp<AppStackParamList>
}

export type SVGProps = {
  fill?: string,
  height?: number,
  width?: number,
}