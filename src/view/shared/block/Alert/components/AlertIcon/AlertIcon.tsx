import styles from './styles';
// import { Icon, IconProps } from "@view/shared/typo/Icon/Icon";
import React from 'react';
import {View} from 'react-native';

// type Props = IconProps & {};F
type Props = {};

const AlertIcon = (props: Props): JSX.Element => (
  <View style={styles.iconWrapper}>
    {/* <Icon {...props} style={[styles.icon, props.style]} /> */}
  </View>
);

export default AlertIcon;
