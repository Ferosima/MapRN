import { pathShadowPathsSkia } from '../constants';
import { HapticModule } from '../../../../../../modules/haptic';
import { SkPath, usePathInterpolation } from '@shopify/react-native-skia';
import { useCallback } from 'react';
import { HapticFeedbackTypes } from 'react-native-haptic-feedback';
import {
  Easing,
  SharedValue,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TUseMapPinShadowPathHook = [
  SharedValue<SkPath>,
  (isMoving: boolean | undefined) => void,
];

export const useMapPinShadowPath = (): TUseMapPinShadowPathHook => {
  const shadowProgress = useSharedValue(0);

  const pathPinShadow = usePathInterpolation(
    shadowProgress,
    [0, 1],
    pathShadowPathsSkia,
  );

  const animatePinShadow = useCallback(
    (isMoving: boolean | undefined): void => {
      shadowProgress.value = withTiming(
        isMoving ? 0 : 1,
        {
          duration: 200,
          easing: Easing.inOut(Easing.poly(3)),
        },
        () => {
          runOnJS(triggerHaptic)();
        },
      );
    },
    [],
  );
  const triggerHaptic = (): void => {
    // To give tactile feedback from falling pins
    if (shadowProgress.value === 1)
      HapticModule.trigger(HapticFeedbackTypes.impactLight);
  };

  return [pathPinShadow, animatePinShadow];
};
