import React from 'react'
import { View } from 'react-native'
import Spinner, { SpinnerType } from 'react-native-spinkit'
import colors from '../../theme/colors'

export type LoaderProps = {
  color?: string;
  size?: number;
  type?: SpinnerType;
}

const Loader = ({color, size, type}: LoaderProps) => {

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Spinner isVisible size={size || 60} type={type || "Wave"} color={color || colors.brandBlue}/>
    </View>
  )
}

export default Loader