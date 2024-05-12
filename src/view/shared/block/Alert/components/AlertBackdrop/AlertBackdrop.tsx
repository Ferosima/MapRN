import styles from './styles';
import React, { PropsWithChildren } from 'react';
import Animated from 'react-native-reanimated';

type Props = {
  visible?: boolean;

  blur?: boolean;
};

const AlertBackdrop = (props: PropsWithChildren<Props>): React.ReactElement => (
  <Animated.View style={styles.wrapper}>{props.children}</Animated.View>
);

export default AlertBackdrop;
