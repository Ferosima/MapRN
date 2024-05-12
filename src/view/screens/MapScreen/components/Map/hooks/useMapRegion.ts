import { RefObject } from 'react';
import MapView, { Camera } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~domain/hooks/useStore';
import {
  setCoordinates,
  setMapMoving,
  setMovingBetweenPoints,
  setZoom,
} from '~domain/store/slices/map';
import { setPoint } from '~domain/store/slices/way';
import { ICoords } from '~domain/types/map';
import { GeolocationModule } from '~modules/geolocation';

const useMapRegionHook = (
  ref: RefObject<MapView>,
  camera: Camera,
): [() => void, () => void] => {
  const wayState = useAppSelector(state => state.way);
  const dispatch = useDispatch();

  const onMapRegionChange = (): void => {
    dispatch(setMapMoving(true));
  };

  /** A callback method set when region changes */
  const onMapRegionChangeComplete = async (): Promise<void> => {
    if (!ref.current) return;
    /** Getting camera position */
    const _camera = await ref.current.getCamera();
    if (_camera.zoom && _camera.zoom !== camera.zoom) {
      dispatch(setZoom(_camera.zoom));
    }
    /** Checking position and if there is a camera it sets the new camera position */
    if (_camera) {
      dispatch(setCoordinates(_camera.center));
      dispatch(setMapMoving(false));
      dispatch(setMovingBetweenPoints(false));
    }

    handleGetAddress(_camera.center);
  };

  const handleGetAddress = async (coords: ICoords): Promise<void> => {
    const id = Date.now().toString();
    const address = await GeolocationModule.getAddressByCoord(coords);
    if (!address) return;
    dispatch(
      setPoint({
        point: { ...coords, address, id },
        position: wayState.activePoint,
      }),
    );
  };

  return [onMapRegionChange, onMapRegionChangeComplete];
};

export default useMapRegionHook;
