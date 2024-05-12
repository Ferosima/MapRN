import styles from './styles';

import React, { PropsWithChildren } from 'react';
import Animated from 'react-native-reanimated';
import { ColorsPresets } from '~view/constants/theme/colors';
import Box from '~view/shared/block/Box/Box';

type Props = {
  visible?: boolean;
};

const AlertBackground = (
  props: PropsWithChildren<Props>,
): React.ReactElement => {
  if (!props.visible) return null;

  return (
    <Animated.View style={styles.animated}>
      <Box color={ColorsPresets.Bg4} style={styles.wrapper}>
        {props.children}
      </Box>
    </Animated.View>
  );
};

export default AlertBackground;
