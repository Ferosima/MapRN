import styles from './styles';

import React from 'react';
import { ColorsPresets } from '~view/constants/theme/colors';
import Text, { TextProps } from '~view/shared/typo/Text/Text';

const AlertMessage = (props: Partial<TextProps>): JSX.Element => (
  <Text
    type={'s5'}
    color={ColorsPresets.White}
    {...props}
    style={[props.style, styles.text]}
  />
);

export default AlertMessage;
