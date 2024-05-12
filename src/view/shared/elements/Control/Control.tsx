import styles from './styles';

import React from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';
import Box from '~view/shared/block/Box/Box';
import Icon, { IconProps } from '~view/shared/typo/Icon/Icon';

type Props = ViewProps & {
  onPress?: () => void;
  icon: IconProps['name'];
  size: number;
};

const Control = ({
  icon,
  onPress,
  style,
  size,
  ...props
}: Props): React.ReactElement => (
  <TouchableOpacity
    {...props}
    style={[styles.wrapper, { height: size, width: size }, style]}
    onPress={onPress}>
    <Box color={ColorsPresets.Bg5} style={styles.content}>
      <Icon name={icon} color={ColorsPresets.Gray3} />
    </Box>
  </TouchableOpacity>
);

export default Control;
