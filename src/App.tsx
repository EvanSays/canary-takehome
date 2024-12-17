import React, {useCallback, useEffect, useState} from 'react'
import {
  DeviceEventEmitter,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import RootNavigator from './navigation';
import colors from './theme/colors'

const App = () => {
  

  const backgroundStyle = {
    backgroundColor: colors.white,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'}/>
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
