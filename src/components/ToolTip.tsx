import { Circle } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

export const ToolTip = ({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) => {
  return <Circle cx={x.value} cy={y.value} r={8} color="black" />;
}