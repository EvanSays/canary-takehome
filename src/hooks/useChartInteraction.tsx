import { useState, useEffect } from 'react';
import { useChartTransformState, useChartPressState } from "victory-native";
import * as Haptics from 'expo-haptics';

interface ChartInteractionOptions {
  initialDomain?: { x: [number, number] };
}

export function useChartInteraction(options: ChartInteractionOptions = {}) {
  const [domain, setDomain] = useState(options.initialDomain ?? { x: [0, 1600] });
  const { state: transformState } = useChartTransformState();
  const { state: pressState, isActive } = useChartPressState({ x: 0, y: { y: 0 } });
  const [enableChartPress, setEnableChartPress] = useState(false)

  useEffect(() => {
    if (isActive) Haptics.selectionAsync();
  }, [isActive]);

  const zoomIn = () => {
    setDomain((prevDomain) => {
      const [min, max] = prevDomain.x;
      const range = (max - min) / 2;
      const center = (min + max) / 2;
      return { x: [center - range / 2, center + range / 2] };
    });
  };

  const zoomOut = () => {
    setDomain((prevDomain) => {
      const [min, max] = prevDomain.x;
      const range = (max - min) * 2;
      const center = (min + max) / 2;
      return { x: [Math.max(0, center - range / 2), center + range / 2] };
    });
  };

  return {
    transformState,
    pressState,
    isActive,
    domain,
    zoomIn,
    zoomOut,
    enableChartPress,
    setEnableChartPress,
  };
}