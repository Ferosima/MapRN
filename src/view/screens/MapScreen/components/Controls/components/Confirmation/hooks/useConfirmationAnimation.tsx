import { useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useConfirmationAnimation = (
  show: boolean,
): StyleProp<ViewStyle> => {
  const opacity = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withTiming(show ? 1 : 0);
  }, [show]);

  return style;
};
