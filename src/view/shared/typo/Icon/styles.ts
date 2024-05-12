import {StyleSheet} from 'react-native';
import {SIZES} from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  icon: {
    fontSize: SIZES.ELEMENTS.SMALL,
    textAlign: 'left',
  },
  revert: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
});
