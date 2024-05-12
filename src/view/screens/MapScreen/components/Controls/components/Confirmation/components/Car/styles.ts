import { StyleSheet } from 'react-native';
import { SIZES } from '~view/constants/theme/defaultStyles';

export const CAR_WIDTH = 134;
export const END_POSITION = SIZES.WINDOW.WIDTH - 100 - 16 * 2;

export default StyleSheet.create({
  block: {
    zIndex: 2,
  },
  car: {
    height: 40,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
    top: 5,
    width: CAR_WIDTH,
    zIndex: 1,
  },
  gestureCover: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
