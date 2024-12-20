import React, { useCallback, useMemo } from 'react'
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import colors from '../../theme/colors'
import shadow from '../../theme/shadow'
import NavigationWidget from '../../components/NavigationWidget'
import { useMockDataStream } from '../../hooks/useMockDataStream';

export type LandingProps = {
  navigation: NavigationProp<ParamListBase>
}

const LandingScreen = ({navigation}: LandingProps) => {
  const {startReading, reset} = useMockDataStream()
  return (
    <View style={styles.screen}>
      <View style={styles.customHeaderContainer}>
        <Image source={require('../../resources/images/Logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Canary Mobile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NavigationWidget navigation={navigation}/>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Start Reading" onPress={() => startReading()}/>
        <Button title="Reset" onPress={() => reset()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contentContainer: {
    padding: 30,
  },
  customHeaderContainer: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 150,
    paddingHorizontal: 30,
    ...shadow,
  },
  headerImage: {
    height: 90,
    marginRight: 30,
    width: 90
  },
  headerText: {
    color: colors.brandBlue,
    fontSize: 36,
    fontWeight: 'bold',
  },
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonContainer: {
    padding: 30,
    gap: 10,
  },
});

export default LandingScreen