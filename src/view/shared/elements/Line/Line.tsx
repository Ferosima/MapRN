import styles from './styles';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ColorsPresets} from '~view/constants/theme/colors';
import Box from '~view/shared/block/Box/Box';

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: ColorsPresets;
};

const Line = (props: Props): JSX.Element => (
  <Box
    {...props}
    testID={'Line'}
    color={props.color || ColorsPresets.GrayLine}
    style={[styles.line, props.style]}
  />
);

export default Line;
