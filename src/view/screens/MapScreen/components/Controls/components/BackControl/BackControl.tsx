import styles from '../../styles';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~domain/hooks/useStore';
import {
  setCoordinates,
  setMovingBetweenPoints,
} from '~domain/store/slices/map';
import {
  WayPointPosition,
  setActivePoint,
  setPoint,
} from '~domain/store/slices/way';
import { ICoords } from '~domain/types/map';
import Control from '~view/shared/elements/Control/Control';
import { transitionDelay } from '~domain/utils/transitionDelay';

const BackControl = (): React.ReactElement => {
  const dispatch = useDispatch();
  const way = useAppSelector(state => state.way);

  const handlePressBack = () => {
    dispatch(setPoint({ point: undefined, position: way.activePoint }));

    const nextPoint = Object.entries(way.points).find(
      ([key, position]) => key !== way.activePoint && position,
    );
    const nextPosition = !nextPoint
      ? WayPointPosition.Start
      : (nextPoint[0] as WayPointPosition);

    // Delay for pin swap animation
    transitionDelay(() => dispatch(setActivePoint(nextPosition)));

    if (nextPoint?.[1]) {
      dispatch(setMovingBetweenPoints(true));
      // Delay for pin swap animation
      transitionDelay(() => dispatch(setCoordinates(nextPoint[1] as ICoords)));
    }
  };

  if (Object.values(way.points).every(point => !point)) {
    return <View />;
  }

  return (
    <Control
      icon={'ChevronLeft'}
      size={40}
      style={styles.button}
      onPress={handlePressBack}
    />
  );
};

export default BackControl;
