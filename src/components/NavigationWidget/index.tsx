import React from "react";
import { 
  StyleSheet,
  Text,
  View
 } from 'react-native'
import colors from "../../theme/colors"
import shadow from "../../theme/shadow"
import { NavigationProp, ParamListBase } from "@react-navigation/native"
import { NavNames } from "../../constants/navigation"
import ChartIcon from "../../resources/icons/Graph"
import DashboardButton from "../DashboardButton"


 type NavigationWidgetProps = {
  navigation: NavigationProp<ParamListBase>,
 }

const NavigationWidget = ({navigation}: NavigationWidgetProps) => {

  const handleMapPress = () => {
    navigation.navigate(NavNames.maps)
  }

  const handleVisualizationPress = () => {
    navigation.navigate(NavNames.charts)
  }

  return (
    <View style={styles.container} >
      <View style={styles.buttonContainer}>
        <DashboardButton
          onPress={handleMapPress}
          text='Map'
        />
        <DashboardButton
          onPress={handleVisualizationPress}
          text='Charts'
        />
      </View> 
    </View>
  )

 }

 const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5
  },
  container: {
    backgroundColor: colors.brandBlue,
    borderRadius: 10,
    padding: 15,
    ...shadow,
  },
  iconContainer: {
    alignItems: 'center', 
    justifyContent: 'flex-end',
    paddingTop: 7,
    transform: [{rotate: '270deg'}],
  },
  headerText: {
    backgroundColor: colors.secondary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 10,
    textAlign: 'center',
    ...shadow,
  },
  seeMoreContainer: {
    alignSelf: 'center',
    borderColor: colors.brandYellow,
    borderRadius: 30,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    ...shadow,
  },
  seeMoreText: {
    textAlign: 'center',
    color: colors.brandYellow,
    fontSize: 14,
    fontWeight: '600',
  },
  table: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 1,
    margin: 15,
  },
  tableLine: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },
 })

 export default NavigationWidget