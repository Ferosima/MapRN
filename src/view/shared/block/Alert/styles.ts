import { StyleSheet } from 'react-native';
import { SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  buttonsRow: {
    paddingHorizontal: 16,
    width: '100%',
  },
  content: {
    padding: SIZES.GAP,
  },
  modal: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  offset: {
    marginBottom: SIZES.GAP,
  },
  offsetSmall: {
    marginBottom: SIZES.GAP / 2,
  },
});
