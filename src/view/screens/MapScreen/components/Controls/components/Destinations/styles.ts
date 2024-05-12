import { StyleSheet } from 'react-native';
import { SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  content: { flex: 1 },
  line: {
    marginHorizontal: 12,
    marginVertical: 6,
    opacity: 0.3,
  },
  text: {
    flexShrink: 1,
    marginBottom: 6,
    textAlign: 'left',
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: SIZES.WINDOW.WIDTH - 32,
  },
});
