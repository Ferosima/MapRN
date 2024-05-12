import { RefObject } from 'react';
import MapView, { Camera } from 'react-native-maps';
import { cloneDeep } from 'lodash';
import { compare } from '~domain/utils/compare';

const useMapCenterChange = (
  ref: RefObject<MapView>,
  camera: Camera,
): [() => Promise<void>] => {
  const handleCenterPointChange = async (): Promise<void> => {
    if (!ref.current) return;

    const _camera = await ref.current.getCamera();
    /** Comparing old camera position and new one */
    compare(camera.center, _camera?.center, async () => {
      /** Distance between centres */
      const distance = Math.sqrt(
        Math.pow(_camera.center.latitude - camera.center.latitude, 2) +
          Math.pow(_camera.center.longitude - camera.center.longitude, 2),
      );

      // Calc duration based on distance to smooth animation
      const duration = Math.log2(distance) * 100;

      ref.current!.animateCamera(
        {
          center: cloneDeep(camera.center),
          zoom: camera.zoom,
        },
        { duration: duration > 200 ? duration : 200 },
      );
    });
  };
  return [handleCenterPointChange];
};

export default useMapCenterChange;
