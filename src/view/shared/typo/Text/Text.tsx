import styles from './styles';
import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Colors, ColorsPresets} from '~view/constants/theme/colors';
import {FONT_FAMILY} from '~view/constants/theme/defaultStyles';

export interface TextProps extends RNTextProps {
  size?: number;
  font?: FONT_FAMILY;

  style?: StyleProp<TextStyle>;

  type: keyof typeof styles;
  color?: ColorsPresets;
}

const Text: React.FunctionComponent<TextProps> = ({
  size = 16,
  font = FONT_FAMILY.REGULAR,
  color,
  style,
  ...props
}: React.PropsWithChildren<TextProps>) => (
  <RNText
    {...props}
    style={[
      styles.text,
      {color: Colors?.[color], fontFamily: font, fontSize: size},
      styles[props.type],
      style,
    ]}>
    {props.children}
  </RNText>
);

Text.defaultProps = {
  color: ColorsPresets.Black,
} as TextProps;

export default Text;
