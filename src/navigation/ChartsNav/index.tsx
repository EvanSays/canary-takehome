import React, { useState } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavNames } from "../../constants/navigation"
import MethaneScreen from "../../screens/Charts/Methane"
import EthaneScreen from "../../screens/Charts/Ethane"
import Loader from "../../components/Loader"
import colors from "../../theme/colors"

const Tab = createMaterialTopTabNavigator()

const ChartsNav = () => {
  const [currentTab, setCurrentTab] = useState(NavNames.methane)
  return(
    <Tab.Navigator
      initialRouteName={currentTab}
      screenOptions={{
        // lazy: true,
        tabBarActiveTintColor: colors.brandBlue,
        tabBarInactiveTintColor: colors.shadowColor,
        tabBarIndicatorStyle: {
          backgroundColor: colors.brandBlue,
          height: 4,
          marginHorizontal: '9%',
          width: '20%',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        tabBarStyle: {
          backgroundColor: undefined,
          elevation: 0,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 10 }, // change this for more shadow
          shadowOpacity: 0.4,
          shadowRadius: 6
        },
        tabBarPressColor: colors.secondary,
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name={NavNames.methane}
        component={MethaneScreen}
        listeners={{
          focus: () => setCurrentTab(NavNames.methane)
        }}
      />
      <Tab.Screen
        name={NavNames.ethane}
        component={EthaneScreen}
        listeners={{
          focus: () => setCurrentTab(NavNames.ethane)
        }}
      />
    </Tab.Navigator>
  )
}

export default ChartsNav