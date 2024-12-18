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
  const [state, dispatch] = useContext(Context)

  useEffect(() => {
    const fetchAndParseCSV = async () => {
      const csvUrl = 'https://gist.githubusercontent.com/EvanSays/42559ad5eb9612528f364743e97736f4/raw/3eab15d7a23bd83272102dc906d52b94ad734eb5/project-canary-data.csv'; // Replace with your CSV URL

      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log('Parsed Data:', results.data);
            // setCsvData(results.data); // Store parsed data in state
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchAndParseCSV();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'}/>
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  }
});

export default App;
