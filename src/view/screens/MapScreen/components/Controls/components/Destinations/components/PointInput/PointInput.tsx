import React from 'react';
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
import { transitionDelay } from '~domain/utils/transitionDelay';
import Input from '~view/shared/typo/Input/Input';

type Props = {
  placeholder: string;
  position: WayPointPosition;
};

const PointInput = ({ position, placeholder }: Props): React.ReactElement => {
  const wayState = useAppSelector(state => state.way);
  const mapState = useAppSelector(state => state.map);

  const point = wayState.points[position];
  const dispatch = useDispatch();

  const onClear = () => {
    dispatch(setPoint({ point: undefined, position }));
  };

  const onPress = () => {
    if (mapState.moving) return;

    if (point) {
      if (wayState.activePoint !== position) {
        dispatch(setMovingBetweenPoints(true));
      }
      // Delay for pin swap animation
      transitionDelay(() => dispatch(setCoordinates(point)));
    } else {
      // Go to the nearest place to separate points
      const offset = 0.1 / Math.pow(2, mapState.zoom - 9);
      // Delay for pin swap animation
      transitionDelay(() =>
        dispatch(
          setCoordinates({
            latitude: mapState.region.latitude + offset,
            longitude: mapState.region.longitude + offset,
          }),
        ),
      );
    }
    // Delay for pin swap animation
    transitionDelay(() => dispatch(setActivePoint(position)));
  };

  return (
    <Input
      value={point?.address ?? ''}
      textFieldProps={{ editable: wayState.activePoint === position }}
      withClear
      focused={wayState.activePoint === position}
      placeholder={placeholder}
      onClear={onClear}
      onPress={onPress}
    />
  );
};

export default PointInput;
