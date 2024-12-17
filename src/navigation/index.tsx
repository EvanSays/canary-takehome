import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './AppNav/index'

type RootNavProps = {}

const RootNavigator = (props: RootNavProps) => {
  return (
    <NavigationContainer>
        <AppNav />
    </NavigationContainer>
  );
}

export default RootNavigator