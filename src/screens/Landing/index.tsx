import React from 'react'
import {
  Button,
  Image,
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
        <Image source={require('../../resources/images/cow.png')} style={styles.headerImage} />
        <View style={styles.titleContainer}>
          <Image 
            source={require('../../resources/images/fart.png')} 
            style={styles.fartImage} 
          />
          <Text style={styles.headerText}>Methane Mobile</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NavigationWidget navigation={navigation}/>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionTitle}>Data Streaming Instructions</Text>
          <Text style={styles.instructionText}>
            Click the button below to start streaming the data to the map.
          </Text>
          <Text style={styles.instructionText}>
            Pin color is based on the delta between the current reading and the previous 2 minutes.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Start Streaming Data" onPress={() => startReading()}/>
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
    marginRight: 20,
    width: 90,
    resizeMode: 'contain',
    tintColor: colors.brandBlue,
  },
  headerText: {
    color: colors.brandBlue,
    fontSize: 30,
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
  instructionsContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    ...shadow,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.brandBlue,
    marginBottom: 12,
  },
  instructionText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 8,
  },
  titleContainer: {
    position: 'relative',
  },
  fartImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -22,
    left: 210, // Adjust this value to position above the 'e'
    transform: [{ rotate: '-40deg' }],
    // tintColor: colors.brandBlue,
    resizeMode: 'contain',
  },
});

export default LandingScreen