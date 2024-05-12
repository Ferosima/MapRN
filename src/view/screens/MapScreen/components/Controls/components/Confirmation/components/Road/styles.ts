import { StyleSheet } from 'react-native';
import { SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    borderRadius: 16,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    width: SIZES.WINDOW.WIDTH - 16 * 2,
    zIndex: 0,
  },
});
