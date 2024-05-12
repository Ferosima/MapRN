import styles from './styles';
import { Canvas, Path } from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Colors, ColorsPresets } from '~view/constants/theme/colors';

type Props = {
  delay: number;
  path: string;
  color: ColorsPresets;
  duration: number;
};

const LoaderCircle = ({
  color,
  duration,
  delay,
  path,
}: Props): React.ReactElement => {
  const rotation = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${interpolate(rotation.value, [0, 1], [0, 360])}deg` },
    ],
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withDelay(delay, withTiming(1, { duration: duration - delay })),
      -1,
    );
  }, []);

  return (
    <Animated.View style={[styles.path, style]}>
      <Canvas style={styles.path}>
        <Path path={path} color={Colors[color]} />
      </Canvas>
    </Animated.View>
  );
};

LoaderCircle.defaultProps = {
  delay: 0,
  duration: 1600,
};

export default LoaderCircle;
