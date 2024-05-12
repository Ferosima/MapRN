import styles from './styles';
import React, { FunctionComponent, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { ColorsPresets } from '~view/constants/theme/colors';
import Text from '~view/shared/typo/Text/Text';

type TStyle = 'default' | 'cancel' | 'destructive';

type Props = {
  text: string;
  style?: TStyle;
  testID?: string;
  onPress?: () => void;
  callback: () => void;
};

type StyleColors = {
  [key in TStyle]: string;
};

const styleColors: StyleColors = {
  cancel: ColorsPresets.Gray1,
  default: ColorsPresets.White,
  destructive: ColorsPresets.Danger,
};

const AlertButton: FunctionComponent<Props> = props => {
  const onPress = useCallback(() => {
    if (props.onPress) {
      props.onPress();
    }
    props.callback();
  }, [props]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.wrapper}
      testID={props.testID}>
      <Text
        type={'b8'}
        color={styleColors[props.style as keyof TStyle]}
        style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

AlertButton.defaultProps = {
  style: 'default',
};

export default AlertButton;
