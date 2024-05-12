import styles from './styles';
import React from 'react';
import { ColorsPresets } from '~view/constants/theme/colors';
import Text, { TextProps } from '~view/shared/typo/Text/Text';

const AlertTitle = (props: Partial<TextProps>): JSX.Element => (
  <Text
    type="b5"
    color={ColorsPresets.White}
    {...props}
    style={[props.style, styles.title]}
  />
);

export default AlertTitle;
