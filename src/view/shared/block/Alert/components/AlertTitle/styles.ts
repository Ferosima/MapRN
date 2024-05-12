import {StyleSheet} from 'react-native';
import { FONT_FAMILY, SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: 16,
    marginHorizontal: SIZES.GAP,
    textAlign: 'center',
  },
});
