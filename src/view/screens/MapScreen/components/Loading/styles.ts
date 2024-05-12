import { StyleSheet } from 'react-native';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';
import { SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  background: {
    backgroundColor: Colors[ColorsPresets.Bg5],
    bottom: 0,
    left: 0,
    opacity: 0.8,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  content: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'space-between',
    left: 0,
    marginHorizontal: 40,
    position: 'absolute',
    right: 0,
    top: SIZES.WINDOW.HEIGHT / 2 - 50,
  },
  loader: {
    marginBottom: 30,
  },
  wrapper: {
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
