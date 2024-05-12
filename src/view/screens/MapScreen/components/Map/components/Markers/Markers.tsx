import React from 'react';
import { useAppSelector } from '~domain/hooks/useStore';
import { WayPointPosition } from '~domain/store/slices/way';
import { ColorsPresets } from '~view/constants/theme/colors';
import Marker from '~view/shared/elements/Marker/Marker';

const Markers = (): React.ReactElement => {
  const wayState = useAppSelector(state => state.way);
  const mapState = useAppSelector(state => state.map);

  return (
    <>
      <Marker
        point={wayState.points.start}
        zoom={mapState.zoom}
        hide={
          wayState.activePoint === WayPointPosition.Start &&
          !mapState.movingBetweenPoints
        }
        color={ColorsPresets.MainGreen}
      />
      <Marker
        point={wayState.points.end}
        zoom={mapState.zoom}
        hide={
          wayState.activePoint === WayPointPosition.End &&
          !mapState.movingBetweenPoints
        }
        color={ColorsPresets.MainYellow}
      />
    </>
  );
};

export default Markers;
