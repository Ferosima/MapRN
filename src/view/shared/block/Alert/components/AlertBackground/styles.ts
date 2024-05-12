import {Dimensions, StyleSheet} from 'react-native';
import {SIZES} from '~view/constants/theme/defaultStyles';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  animated: {
    position: 'absolute',
  },
  wrapper: {
    borderRadius: SIZES.GAP,
    maxHeight: height * 0.7,
    maxWidth: width - SIZES.GAP * 6,
    minWidth: width - SIZES.GAP * 6,
    overflow: 'hidden',
  },
});
