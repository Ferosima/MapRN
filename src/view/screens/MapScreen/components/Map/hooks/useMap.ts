import useMapCenterChange from './useMapCenterChange';
import useMapRegionHook from './useMapRegion';
import useMapZoomLevelChange from './useMapZoomLevelChange';
import useMapUserLocation from './useMapUserLocation';
import { cloneDeep } from 'lodash';
import { RefObject, useEffect, useRef } from 'react';
import MapView, { Camera } from 'react-native-maps';
import { useAppSelector } from '~domain/hooks/useStore';

/** hooks to set up a map control and get the position listeners */
const useMapHook = (): [
  RefObject<MapView>,
  Camera,
  boolean,
  () => void,
  () => void,
] => {
  const ref = useRef<MapView>(null);
  const mapState = useAppSelector(state => state.map);

  const camera = {
    center: {
      latitude: mapState.region.latitude,
      longitude: mapState.region.longitude,
    },
    heading: 0,
    pitch: 0,
    zoom: mapState.zoom,
  };
  const initialCamera = useRef(cloneDeep(camera)).current;
  const scrollEnabled = !mapState.movingBetweenPoints;

  const [handleUserLocation] = useMapUserLocation();
  const [handleCenterPointChange] = useMapCenterChange(ref, camera);
  const [handleZoomLevelChange] = useMapZoomLevelChange(ref, camera);
  const [onMapRegionChange, onMapRegionChangeComplete] = useMapRegionHook(
    ref,
    camera,
  );

  useEffect(() => {
    handleUserLocation();
  }, []);

  useEffect(() => {
    handleZoomLevelChange();
  }, [mapState.zoom]);

  useEffect(() => {
    handleCenterPointChange();
  }, [mapState.region.latitude, mapState.region.longitude]);

  return [
    ref,
    initialCamera,
    scrollEnabled,
    onMapRegionChange,
    onMapRegionChangeComplete,
  ];
};

export default useMapHook;
