import { StyleSheet } from 'react-native';
import { SIZES } from '~view/constants/theme/defaultStyles';

const imageHeight = 72;

export default StyleSheet.create({
  buttons: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 30,
    position: 'absolute',
    right: 0,
    // To center image
    top: SIZES.WINDOW.HEIGHT / 2 - imageHeight / 2,
    zIndex: 10,
  },
  image: {
    height: imageHeight,
    width: 50,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#1D2520',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
