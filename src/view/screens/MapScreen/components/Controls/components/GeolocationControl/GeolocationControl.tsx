import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~domain/hooks/useStore';
import { setLocationPermission } from '~domain/store/slices/app';
import { setCoordinates } from '~domain/store/slices/map';
import { PermissionsModule } from '~modules/permissions';
import Control from '~view/shared/elements/Control/Control';

type Props = {
  style: StyleProp<ViewStyle>;
};
const GeolocationControl = (props: Props): React.ReactElement => {
  const appState = useAppSelector(state => state.app);
  const mapState = useAppSelector(state => state.map);
  const dispatch = useDispatch();

  const handlePressLocation = async () => {
    if (appState.locationPermission !== RESULTS.GRANTED) {
      const response = await PermissionsModule.request(
        PermissionsModule.PERMISSIONS_LOCATION,
      );

      dispatch(setLocationPermission(response));
    } else if (mapState.userLocation && !mapState.moving) {
      dispatch(setCoordinates(mapState.userLocation));
    }
  };

  return (
    <Control
      icon={'Location'}
      size={40}
      onPress={handlePressLocation}
      style={props.style}
    />
  );
};

export default GeolocationControl;
