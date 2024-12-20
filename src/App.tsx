import React, {useCallback, useContext, useEffect, useState} from 'react'
import {
  DeviceEventEmitter,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import RootNavigator from './navigation';
import colors from './theme/colors'
import { Context, Store } from './context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';



const App = () => {
  useEffect(() => {
    Font.loadAsync({
      'Inter-Medium': require('../assets/fonts/inter-medium.ttf'),
    });
  }, []);

  return (
    <GestureHandlerRootView>
      <Store>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'}/>
          <RootNavigator />
        </SafeAreaView>
      </Store>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  }
});

export default App;
