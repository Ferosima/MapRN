import { useMapPinPath } from './useMapPinPath';
import { useMapPinShadowPath } from './useMapPinShadow';
import { useMapPinPathColor } from './useMapPinPathColor';
import { useMapPinStyle } from './useMapPinStyle';
import { SkPath } from '@shopify/react-native-skia';
import { useEffect, useRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { StyleProp } from 'react-native';
import { useAppSelector } from '~domain/hooks/useStore';
import { WayPointPosition } from '~domain/store/slices/way';

type TUseMapPinHook = [
  SharedValue<SkPath>,
  SharedValue<SkPath>,
  SharedValue<SkPath>,
  SharedValue<number[]>,
  StyleProp<any>,
];

export const useMapPin = (): TUseMapPinHook => {
  const wayState = useAppSelector(state => state.way);
  const mapState = useAppSelector(state => state.map);

  const [pathPin, pathPinCircle, animatePin, setPinValue] = useMapPinPath();
  const [pathPinShadow, animatePinShadow] = useMapPinShadowPath();
  const [color, animateColor] = useMapPinPathColor();
  const [style, animateStyle] = useMapPinStyle();

  const prevMovingBetweenPoints = useRef(false);

  useEffect(() => {
    // Hard set to prevent unnecessary fall animation
    if (mapState.movingBetweenPoints || prevMovingBetweenPoints.current) {
      setPinValue(1);
    } else {
      animatePin(mapState.moving);
      animatePinShadow(mapState.moving);
    }
    prevMovingBetweenPoints.current = mapState.movingBetweenPoints;
  }, [mapState.moving, mapState.movingBetweenPoints]);

  useEffect(() => {
    // Hide between moving
    animateStyle(mapState.movingBetweenPoints);
  }, [mapState.movingBetweenPoints]);

  // Change color based on active point
  useEffect(() => {
    animateColor(wayState.activePoint === WayPointPosition.Start);
  }, [wayState.activePoint]);

  return [pathPin, pathPinCircle, pathPinShadow, color, style];
};
