import { RefObject } from 'react';
import MapView, { Camera } from 'react-native-maps';
import { compare } from '~domain/utils/compare';

const useMapZoomLevelChange = (
  ref: RefObject<MapView>,
  camera: Camera,
): [() => Promise<void>] => {
  const handleZoomLevelChange = async (): Promise<void> => {
    if (!ref.current) return;

    /** Getting camera position */
    const _camera = await ref.current.getCamera();

    /** Comparing old camera position and new one */
    compare(camera.zoom, _camera?.zoom, () => {
      /** Called if there is difference and animate (with duration 100) camera position */
      ref.current!.animateCamera({ zoom: camera.zoom }, { duration: 300 });
    });
  };
  return [handleZoomLevelChange];
};

export default useMapZoomLevelChange;
