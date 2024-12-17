import { Platform } from "react-native"
import colors from "./colors"

const shadow = Platform.OS === "ios" ? {
  shadowColor: colors.shadowColor,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
} : {
  elevation: 2,
}

export default shadow