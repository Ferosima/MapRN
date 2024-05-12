import styles from './styles';
import { Canvas } from '@shopify/react-native-skia';
import React, { useRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SIZES } from '~view/constants/theme/defaultStyles';
import Circle from '~view/shared/elements/Circle/Circle';

type Props = {
  colors: string[];
  style: StyleProp<ViewStyle>;
};

const R = SIZES.WINDOW.HEIGHT * 0.6;
/** Distance between circles */
const STEP = 50;

const Background = ({ colors, style }: Props): React.ReactElement => {
  const insets = useSafeAreaInsets();
  const circles = useRef(Array(Math.floor(R / STEP)).fill(1)).current;

  const canvasStyle = useRef({
    height: SIZES.WINDOW.HEIGHT,
    width: SIZES.WINDOW.WIDTH,
  } as StyleProp<ViewStyle>).current;

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.canvas}>
        <Canvas style={canvasStyle}>
          {circles.map((_, index) => (
            <Circle
              cy={SIZES.WINDOW.HEIGHT / 2 - insets.bottom / 2}
              cx={SIZES.WINDOW.WIDTH / 2}
              key={index}
              index={circles.length - 1 - index}
              r={R}
              step={STEP}
              duration={3000}
              colors={colors}
            />
          ))}
        </Canvas>
      </View>
    </View>
  );
};

Background.defaultProps = {
  colors: ['#81B5AE40', '#81B5AE80', '#81B5AE05'],
};

export default Background;
