import React, { ReactNode } from 'react'
import {
  Pressable, 
  StyleSheet, 
  Text,
} from 'react-native'
import colors from '../../theme/colors'

interface IDashboardButton {
  icon?: ReactNode;
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export default ({icon, onPress, text, disabled = false}: IDashboardButton) => {

  return (
    <Pressable onPress={onPress} style={[styles.button, disabled && styles.disabled]} disabled={disabled}>
      {icon}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: colors.brandYellow,
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
    height: 100,
    justifyContent: 'center',
    margin: 10,
    paddingTop: 8,
    minWidth: 100,
  },
  buttonText: {
    color: colors.brandYellow,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 4,
  },
  disabled: {
    backgroundColor: colors.shadowColor,
  },
})