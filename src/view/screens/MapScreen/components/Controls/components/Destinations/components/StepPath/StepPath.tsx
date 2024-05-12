import styles from './styles';
import React, { useState } from 'react';
import { Canvas, Circle, Rect } from '@shopify/react-native-skia';

import { Colors, ColorsPresets } from '~view/constants/theme/colors';
import { useAppSelector } from '~domain/hooks/useStore';

const StepPath = (): React.ReactElement => {
  const [height, setHeight] = useState(0);
  const wayState = useAppSelector(state => state.way);

  const onLayout = e => {
    setHeight(e.nativeEvent.layout.height);
  };

  return (
    <Canvas style={styles.wrapper} onLayout={onLayout}>
      <Circle
        strokeWidth={1}
        c={{ x: 6, y: 6 }}
        r={5}
        style={wayState.points.start ? 'fill' : 'stroke'}
        color={Colors[ColorsPresets.GreenGray]}
      />
      <Rect
        x={5.5}
        y={19}
        width={1}
        height={height - 38}
        color={Colors[ColorsPresets.GreenGray]}
      />
      <Circle
        c={{ x: 6, y: height - 6 }}
        r={5}
        strokeWidth={1}
        style={wayState.points.end ? 'fill' : 'stroke'}
        color={Colors[ColorsPresets.GreenGray]}
      />
    </Canvas>
  );
};

export default StepPath;
