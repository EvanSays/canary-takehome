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
import Papa from 'papaparse';




const App = () => {
  return (
    <Store>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'}/>
        <RootNavigator />
      </SafeAreaView>
    </Store>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  }
});

export default App;
