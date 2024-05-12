import { interpolateColors } from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';

type TUseMapPinPathColorHook = [
  Readonly<SharedValue<number[]>>,
  (isStart: boolean) => void,
];

export const useMapPinPathColor = (): TUseMapPinPathColorHook => {
  const stepProgress = useSharedValue(0);

  const color = useDerivedValue(() =>
    interpolateColors(
      stepProgress.value,
      [0, 1],
      [Colors[ColorsPresets.MainGreen], Colors[ColorsPresets.MainYellow]],
    ),
  );

  const animateColor = (isStart: boolean) => {
    stepProgress.value = withTiming(isStart ? 0 : 1);
  };

  return [color, animateColor];
};
