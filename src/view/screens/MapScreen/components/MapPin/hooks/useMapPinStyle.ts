import { StyleProp } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { TransitionDelay } from '~domain/constants/map';

export const useMapPinStyle = (): [
  StyleProp<any>,
  (isHidden: boolean) => void,
] => {
  const opacityProgress = useSharedValue(1);

  const style = useAnimatedStyle(() => ({
    opacity: opacityProgress.value,
  }));

  const animateStyle = (isHidden: boolean): void => {
    if (isHidden) {
      opacityProgress.value = withDelay(
        TransitionDelay,
        withTiming(0, { duration: 0 }),
      );
    } else {
      opacityProgress.value = withTiming(1, { duration: 0 });
    }
  };

  return [style, animateStyle];
};
