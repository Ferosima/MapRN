import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { useAppSelector } from '~domain/hooks/useStore';

const Directions = (): React.ReactElement | null => {
  const wayState = useAppSelector(state => state.way);
  const mapState = useAppSelector(state => state.map);

  if (!wayState.points.start || !wayState.points.end || mapState.moving)
    return null;

  return (
    <MapViewDirections
      origin={{
        latitude: wayState.points.start.latitude,
        longitude: wayState.points.start.longitude,
      }}
      precision="high"
      destination={{
        latitude: wayState.points.end.latitude,
        longitude: wayState.points.end.longitude,
      }}
      optimizeWaypoints={true}
      apikey={'AIzaSyBmdTvd2t5k3y55bEG_YkaR6yVj5npdwXs'}
      strokeColor="hotpink"
      strokeColors={['hotpink', 'yellow']}
      strokeWidth={4}
    />
  );
};

export default Directions;
