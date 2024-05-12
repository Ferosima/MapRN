import { useUserLocationHook } from './hooks/useUserLocationHook';
import { Canvas } from '@shopify/react-native-skia';
import React from 'react';
import { MarkerAnimated } from 'react-native-maps';
import { useAppSelector } from '~domain/hooks/useStore';
import Circle from '~view/shared/elements/Circle/Circle';

const R = 30;
/** Distance between circles */
const STEP = 10;
const ANCHOR = { x: 0.5, y: 0.335 };

const UserLocation = (): React.ReactElement | null => {
  const mapState = useAppSelector(state => state.map);
  const [circles, canvasStyle] = useUserLocationHook(R, STEP);

  if (!mapState.userLocation) return null;

  return (
    <MarkerAnimated coordinate={mapState.userLocation} anchor={ANCHOR}>
      <Canvas style={canvasStyle}>
        {circles.map((_, index) => (
          <Circle
            key={index}
            index={index}
            r={R}
            step={STEP}
            duration={circles.length * 1000}
          />
        ))}
      </Canvas>
    </MarkerAnimated>
  );
};

export default UserLocation;
