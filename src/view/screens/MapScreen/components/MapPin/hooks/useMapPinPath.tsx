import { animationPoints, pinCirclePathSkia, pinPathsSkia } from '../constants';
import { SkPath, usePathInterpolation } from '@shopify/react-native-skia';
import { useCallback } from 'react';
import {
  Easing,
  SharedValue,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type TUseMapPinPathHook = [
  SharedValue<SkPath>,
  SharedValue<SkPath>,
  (isMoving: boolean | undefined) => void,
  (value: number) => void,
];

export const useMapPinPath = (): TUseMapPinPathHook => {
  const pinProgress = useSharedValue(0);

  const pathPin = usePathInterpolation(
    pinProgress,
    animationPoints,
    pinPathsSkia,
  );
  const pathPinCircle = usePathInterpolation(
    pinProgress,
    animationPoints,
    pinCirclePathSkia,
  );

  const animatePin = useCallback((isMoving: boolean | undefined): void => {
    if (isMoving) {
      // Rise up animation
      pinProgress.value = withSequence(
        // To avoid triggering the falling animation in the opposite direction
        withTiming(1, {
          duration: 0,
        }),
        withTiming(2, {
          duration: 200,
        }),
      );
    } else {
      // Fall animation
      pinProgress.value = withSequence(
        // To avoid triggering the falling animation in the opposite direction
        withTiming(0, {
          duration: 0,
        }),
        withTiming(1, {
          duration: 500,
          easing: Easing.inOut(Easing.poly(3)),
        }),
      );
    }
  }, []);

  // Set value without animation
  const setPinValue = (value: number) => {
    pinProgress.value = value;
  };

  return [pathPin, pathPinCircle, animatePin, setPinValue];
};
