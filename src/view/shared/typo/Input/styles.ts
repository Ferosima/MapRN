import { StyleSheet } from 'react-native';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';
import { FONT_FAMILY, SIZES } from '~view/constants/theme/defaultStyles';

export default StyleSheet.create({
  active: {
    borderColor: Colors[ColorsPresets.GreenGray],
    borderWidth: 1,
  },
  error: {
    marginTop: 4,
  },
  pressable: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    height: SIZES.ELEMENTS.STANDARD,
  },
  rightIcon: {
    fontSize: 24,
    marginHorizontal: 8,
  },
  textField: {
    color: Colors[ColorsPresets.White],
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 14,
    marginLeft: 12,
    textAlign: 'left',
  },
  wrapper: {
    height: SIZES.ELEMENTS.STANDARD,
    justifyContent: 'space-between',
  },
});
