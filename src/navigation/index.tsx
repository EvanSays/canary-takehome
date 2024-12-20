import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './AppNav/index'
import { Context, SensorData } from '../context';
import Papa from 'papaparse';
import { useContext, useEffect } from 'react';

type RootNavProps = {}

const RootNavigator = (props: RootNavProps) => {
  const [_, dispatch] = useContext(Context)
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
            dispatch({type: 'SET_SENSOR_DATA', payload: results.data as SensorData[]})
            dispatch({type: 'SET_DATA_READY', payload: true})
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchAndParseCSV();
  }, []);
  return (
    <NavigationContainer>
        <AppNav />
    </NavigationContainer>
  );
}

export default RootNavigator