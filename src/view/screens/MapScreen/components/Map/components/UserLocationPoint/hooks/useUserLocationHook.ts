import { useEffect, useRef, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export const useUserLocationHook = (
  r: number,
  step: number,
): [number[], StyleProp<ViewStyle>] => {
  const [_, setState] = useState(0);
  const circles = useRef(Array(r / step).fill(1)).current;

  const canvasStyle = useRef({
    bottom: r,
    height: r * 4,
    position: 'absolute',
    top: -r,
    width: r * 4,
  } as StyleProp<ViewStyle>).current;

  // Rerender because have issue in first render doesn't show
  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 100);
  }, []);

  return [circles, canvasStyle];
};
