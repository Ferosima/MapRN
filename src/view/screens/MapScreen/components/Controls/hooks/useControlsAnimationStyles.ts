import styles from '../styles';
import { useEffect } from 'react';
import { StyleProp } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useControlsAnimationStyles = (
  showConfirm: boolean,
): Record<keyof typeof styles, StyleProp<any>> => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(70);

  const wrapper = {
    ...styles.wrapper,
    marginBottom: insets.bottom,
    marginTop: insets.top,
  };
  const bottom = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    ...styles.bottom,
  }));

  useEffect(() => {
    translateY.value = withTiming(showConfirm ? 0 : 70);
  }, [showConfirm]);

  return { ...styles, bottom, wrapper };
};
