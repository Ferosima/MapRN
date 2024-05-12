import { useMapPin } from './hooks/useMapPin';
import styles from './styles';
import { Blur, Canvas, Group, Path } from '@shopify/react-native-skia';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const MapPin = (): React.ReactElement | null => {
  const [pathPin, pathPinCircle, pathPinShadow, color, style] = useMapPin();

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.wrapper, style]}
      pointerEvents="box-none">
      <Canvas style={styles.canvas}>
        <Group>
          <Path path={pathPin} color={color} />
          <Path path={pathPinCircle} color={'#292727'} />
          <Path path={pathPinShadow} color={color} opacity={0.3}>
            <Blur blur={0.7} />
          </Path>
        </Group>
      </Canvas>
    </Animated.View>
  );
};

export default MapPin;
