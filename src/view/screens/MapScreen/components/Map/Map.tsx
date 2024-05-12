import styles from './styles';
import useMapHook from './hooks/useMap';
import Markers from './components/Markers/Markers';
import UserLocation from './components/UserLocationPoint/UserLocation';
import Directions from './components/Directions/Directions';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle, ZoomLevels } from '~domain/constants/map';

const Map = (): React.ReactElement | null => {
  const [
    ref,
    initialCamera,
    scrollEnabled,
    onMapRegionChange,
    onMapRegionChangeComplete,
  ] = useMapHook();

  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      style={[styles.map]}
      customMapStyle={MapStyle}
      onRegionChange={onMapRegionChange}
      onRegionChangeComplete={onMapRegionChangeComplete}
      paddingAdjustmentBehavior={'never'}
      rotateEnabled={false}
      scrollEnabled={scrollEnabled}
      initialCamera={initialCamera}
      scrollDuringRotateOrZoomEnabled={false}
      loadingEnabled={true}
      minZoomLevel={ZoomLevels.min}
      maxZoomLevel={ZoomLevels.max}
      showsIndoorLevelPicker={false}>
      <Markers />
      <UserLocation />
      <Directions />
    </MapView>
  );
};

export default Map;
