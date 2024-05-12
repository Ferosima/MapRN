import { RESULTS } from 'react-native-permissions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~domain/hooks/useStore';
import { setUserLocation } from '~domain/store/slices/map';
import { GeolocationModule } from '~modules/geolocation';

const useMapUserLocation = (): [() => Promise<void>] => {
  const dispatch = useDispatch();
  const appState = useAppSelector(state => state.app);

  const handleUserLocation = async (): Promise<void> => {
    if (appState.locationPermission !== RESULTS.GRANTED) return;
    handleSetUserLocation();
    /** Update location every 5 sec */
    // setInterval(handleSetUserLocation, 5000);
  };

  const handleSetUserLocation = async (): Promise<void> => {
    const userLocationCoords = await GeolocationModule.getLiveLocation();
    dispatch(setUserLocation(userLocationCoords));
  };
  return [handleUserLocation];
};

export default useMapUserLocation;
