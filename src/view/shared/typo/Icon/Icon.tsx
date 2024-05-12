import styles from './styles';
import { StaticIcons, TIconName } from './constants';
import React from 'react';
import { I18nManager, TextProps } from 'react-native';
import { createIconSet } from 'react-native-vector-icons';

import { Colors, ColorsPresets } from '~view/constants/theme/colors';
import config from '~assets/fonts/Icons/Icons.json';

export interface IconComponentProps extends TextProps {
  /**
   * icon name that should be displayed
   */
  name: TIconName;
  /**
   * color preset
   */
  color?: ColorsPresets;
}

export type IconProps = Omit<IconComponentProps, 'isRTL'>;

const AIcon = createIconSet(config, 'Icons');

/**
 * Simple icon component
 */
export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  style,
  ...props
}: React.PropsWithChildren<IconComponentProps>) => {
  if (!props.color) {
    return null;
  }

  const color = Colors[props.color];

  return (
    <AIcon
      testID={props.testID}
      color={color}
      style={[
        styles.icon,
        I18nManager.isRTL && !StaticIcons.includes(name)
          ? styles.revert
          : undefined,
        style,
      ]}
      name={name}
    />
  );
};

Icon.defaultProps = {
  color: ColorsPresets.Black,
  testID: 'Icon',
};

export default Icon;
