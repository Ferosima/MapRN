import styles from './styles';
import { TButtonProps } from '../../Button';
import React from 'react';
import { TouchableOpacity, ViewProps } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';
import { FONT_FAMILY } from '~view/constants/theme/defaultStyles';
import Text, { TextProps } from '~view/shared/typo/Text/Text';

export type OutlineButtonProps = TButtonProps &
  ViewProps & {
    type: 'outline';
    onPress?: () => void;
    text: string;
    textOptions?: Partial<TextProps>;
  };

const OutlineButton = ({
  text,
  textOptions,
  onPress,
  style,
  ...props
}: OutlineButtonProps): React.ReactElement => (
  <TouchableOpacity
    {...props}
    style={[styles.wrapper, style]}
    onPress={onPress}>
    <Text
      color={ColorsPresets.Black}
      type="b4"
      font={FONT_FAMILY.BOLD}
      {...textOptions}>
      {text}
    </Text>
  </TouchableOpacity>
);

OutlineButton.defaultProps = {
  type: 'outline',
};

export default OutlineButton;
