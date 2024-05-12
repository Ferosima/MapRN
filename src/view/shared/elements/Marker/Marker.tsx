import styles from './styles';

import { Canvas, Path } from '@shopify/react-native-skia';
import React from 'react';
import { MapMarker } from 'react-native-maps';
import { IPoint } from '~domain/store/slices/way/types';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';

type Props = {
  point: IPoint | undefined;
  zoom: number;
  hide: boolean;
  color: ColorsPresets;
};

const ANCHOR = { x: 0.5, y: 0.5 };

const Marker = ({ point, hide, color }: Props): React.ReactElement | null => {
  if (!point || hide) return null;

  return (
    <MapMarker
      key={`key_${point.longitude}_${point.latitude}`}
      coordinate={point}
      anchor={ANCHOR}
      style={styles.wrapper}>
      <Canvas style={styles.canvas}>
        <Path
          path={
            'M22 10C12.6112 10 5 17.6112 5 27C5 35.4235 11.9598 42.6511 20 44V74.5C20 74.5 19.875 76 22 76C24.125 76 24 74.5 24 74.5V44C32.0402 42.6511 39 35.4235 39 27C39 17.6112 31.3888 10 22 10ZM22 22.75C19.6528 22.75 17.75 24.6528 17.75 27C17.75 29.3472 19.6528 31.25 22 31.25C24.3472 31.25 26.25 29.3472 26.25 27C26.25 24.6528 24.3472 22.75 22 22.75Z'
          }
          color={Colors[color]}
        />
        <Path
          path={
            'M17.75 27C17.75 24.6528 19.6528 22.75 22 22.75C24.3472 22.75 26.25 24.6528 26.25 27C26.25 29.3472 24.3472 31.25 22 31.25C19.6528 31.25 17.75 29.3472 17.75 27Z'
          }
          color={'#292727'}
        />
      </Canvas>
    </MapMarker>
  );
};

Marker.defaultProps = {
  hide: false,
  zoom: 10,
};

export default Marker;
